// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const downloadURI = (uri: string, name: string): void => {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadURI;
