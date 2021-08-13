FROM node:alpine

WORKDIR /app

COPY ./client/package*.json /app/

RUN npm install --global yarn

RUN yarn install --frozen-lockfile

COPY ./client /app

RUN yarn run build

RUN yarn install serve -g
CMD ["serve", "-s", "build/"]
