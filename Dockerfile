FROM node:20-alpine

WORKDIR /src

COPY ./package*.json /src/

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

ENTRYPOINT [ "node", ".output/server/index.mjs" ]
