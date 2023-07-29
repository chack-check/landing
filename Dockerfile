FROM node

WORKDIR /src

COPY . /src/

RUN npm install

RUN npm run build

ENTRYPOINT [ "node", ".output/server/index.mjs" ]