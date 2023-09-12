FROM node:20-alpine

WORKDIR /src

COPY ./package*.json /src/

RUN npm ci && npm cache clean --force

COPY . .

ARG GTAG_ID
ENV NUXT_PUBLIC_GTAG_ID ${GTAG_ID}

RUN npm run build
RUN npm run generate

ENTRYPOINT [ "npm", "run", "start" ]
