FROM node:18.17.0-bullseye-slim

WORKDIR /src

COPY package*.json /src/

RUN npm ci --omit=dev

COPY . /src/

RUN npm run build

ENTRYPOINT [ "node", ".output/server/index.mjs" ]
