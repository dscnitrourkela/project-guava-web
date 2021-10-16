const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
};
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const localDate = Date.now();
  const signature = `timestamp=${localDate}${API_SECRET}`; // Secret from env. Stored in wrangler
  const myText = new TextEncoder().encode(signature);
  const myDigest = await crypto.subtle.digest(
    {
      name: 'SHA-1',
    },
    myText, // The data you want to hash as an ArrayBuffer
  );
  const hashArray = Array.from(new Uint8Array(myDigest)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string

  const responseCopy = request.clone();
  const uint8Arrray = await request.arrayBuffer();
  const formInfo = await responseCopy.formData();
  const parts = [...parseMimeMultipart(uint8Arrray)];
  if (parts.length === 0) {
    return new Response('No parts!');
  }

  const [part] = parts;
  const blob = uint8Arrray.slice(part.index, part.index + part.length);
  const file = new File([blob], 'name');
  if (file.size > 1024000) {
    return new Response(JSON.stringify({ error: 'File beyond 1MB limit' }), {
      headers: { 'content-type': 'application/json', ...corsHeaders },
    });
  }

  let formDataNew = new FormData();
  formDataNew.append('file', file);
  formDataNew.append('api_key', API_KEY); // Secret from env. Stored in wrangler
  formDataNew.append('signature', hashHex);
  formDataNew.append('timestamp', localDate);
  formDataNew.append('resource_type', 'image');

  return fetch('https://api.cloudinary.com/v1_1/dscnitrourkela/image/upload', {
    method: 'POST',
    body: formDataNew,
  })
    .then(res => res.json())
    .then(body => {
      return body.public_id;
    })
    .then(imageId => {
      return fetch('https://signit-api.dscnitrourkela.org/', {
        method: 'POST',
        body: JSON.stringify({
          query: `mutation{
          createSign(
            userMail:${
              formInfo.get('userMail')
                ? '"' + formInfo.get('userMail') + '"'
                : null
            },
            name: ${
              formInfo.get('name') ? '"' + formInfo.get('name') + '"' : null
            }
            image: ${imageId ? '"' + imageId + '"' : null},
            designation: ${
              formInfo.get('designation')
                ? '"' + formInfo.get('designation') + '"'
                : null
            },
          ){
            id
            name
            image
            designation
          }
          }`,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    })
    .then(res => res.json())
    .then(res => {
      return new Response(JSON.stringify(res), {
        headers: { 'content-type': 'application/json', ...corsHeaders },
      });
    });
}

// Parser for multi-part form
// https://github.com/TomasHubelbauer/mime-multipart
function* parseMimeMultipart(/** @type {Uint8Array} */ uint8Array) {
  const textDecoder = new TextDecoder();
  /** @typedef {{ name: string; values: string[]; }} Header */
  /** @typedef {{ type: 'boundary'; boundary: string; }} Boundary */
  /** @typedef {{ type: 'header-name'; boundary: string; name: string; headers: Header[]; }} HeaderName */
  /** @typedef {{ type: 'header-value'; boundary: string; name: string; value: string; values: string[]; headers: Header[]; }} HeaderValue */
  /** @typedef {{ type: 'content'; boundary: string; headers: Headers[]; index: number; length: number; }} Content */
  /** @type {Boundary | HeaderName | HeaderValue | Content} */
  let state = { type: 'boundary', boundary: '' };
  let index = 0;
  let line = 0;
  let column = 0;
  for (; index < uint8Array.byteLength; index++) {
    const character = textDecoder.decode(uint8Array.slice(index, index + 1));
    if (character === '\n') {
      line++;
      column = 0;
    }

    column++;

    switch (state.type) {
      case 'boundary': {
        // Check Windows newlines
        if (character === '\r') {
          if (
            textDecoder.decode(uint8Array.slice(index + 1, index + 2)) !== '\n'
          ) {
            throw new Error(
              `At ${index} (${line}:${column}): found an incomplete Windows newline.`,
            );
          }

          break;
        }

        if (character === '\n') {
          state = {
            type: 'header-name',
            boundary: state.boundary,
            name: '',
            value: '',
            headers: [],
          };
          break;
        }

        state.boundary += character;
        break;
      }
      case 'header-name': {
        // Check Windows newlines
        if (character === '\r') {
          if (
            textDecoder.decode(uint8Array.slice(index + 1, index + 2)) !== '\n'
          ) {
            throw new Error(
              `At ${index} (${line}:${column}): found an incomplete Windows newline.`,
            );
          }

          break;
        }

        if (character === '\n') {
          if (state.name === '') {
            state = {
              type: 'content',
              boundary: state.boundary,
              headers: state.headers,
              index: index + 1,
              length: 0,
            };
            break;
          } else {
            throw new Error(
              `At ${index} (${line}:${column}): a newline in a header name '${state.name}' is not allowed.`,
            );
          }
        }

        if (character === ':') {
          state = {
            type: 'header-value',
            boundary: state.boundary,
            name: state.name,
            value: '',
            values: [],
            headers: state.headers,
          };
          break;
        }

        state.name += character;
        break;
      }
      case 'header-value': {
        // Check Windows newlines
        if (character === '\r') {
          if (
            textDecoder.decode(uint8Array.slice(index + 1, index + 2)) !== '\n'
          ) {
            throw new Error(
              `At ${index} (${line}:${column}): found an incomplete Windows newline.`,
            );
          }

          break;
        }

        if (character === ';') {
          state.values.push(state.value);
          state.value = '';
          break;
        }

        if (character === ' ') {
          // Ignore white-space prior to the value content
          if (state.value === '') {
            break;
          }
        }

        if (character === '\n') {
          state.values.push(state.value);
          state = {
            type: 'header-name',
            boundary: state.boundary,
            name: '',
            value: '',
            headers: [
              { name: state.name, values: state.values },
              ...state.headers,
            ],
          };
          break;
        }

        state.value += character;
        break;
      }
      case 'content': {
        // If the newline is followed by the boundary, then the content ends
        if (
          character === '\n' ||
          (character === '\r' &&
            textDecoder.decode(uint8Array.slice(index + 1, index + 2)) === '\n')
        ) {
          if (character === '\r') {
            index++;
          }

          const boundaryCheck = textDecoder.decode(
            uint8Array.slice(
              index + '\n'.length,
              index + '\n'.length + state.boundary.length,
            ),
          );
          if (boundaryCheck === state.boundary) {
            const conclusionCheck = textDecoder.decode(
              uint8Array.slice(
                index + '\n'.length + state.boundary.length,
                index + '\n'.length + state.boundary.length + '--'.length,
              ),
            );
            if (conclusionCheck === '--') {
              index += '\n'.length + state.boundary.length + '--'.length;
              yield {
                headers: state.headers,
                index: state.index,
                length: state.length,
              };

              if (index !== uint8Array.byteLength) {
                const excess = uint8Array.slice(index);
                if (
                  textDecoder.decode(excess) === '\n' ||
                  textDecoder.decode(excess) === '\r\n'
                ) {
                  return;
                }

                throw new Error(
                  `At ${index} (${line}:${column}): content is present past the expected end of data ${uint8Array.byteLength}.`,
                );
              }

              return;
            } else {
              yield {
                headers: state.headers,
                index: state.index,
                length: state.length,
              };
              state = { type: 'boundary', boundary: '' };
              break;
            }
          }
        }

        state.length++;
        break;
      }
      default: {
        throw new Error(
          `At ${index} (${line}:${column}): invalid state ${JSON.stringify(
            state,
          )}.`,
        );
      }
    }
  }

  if (state.type !== 'content') {
    throw new Error(
      `At ${index} (${line}:${column}): expected content state, got ${JSON.stringify(
        state,
      )}.`,
    );
  }
}
