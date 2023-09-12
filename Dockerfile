FROM node:20-alpine as builder

WORKDIR /src

COPY ./package*.json /src/

RUN npm ci && npm cache clean --force

COPY . .

ARG GTAG_ID
ENV NUXT_PUBLIC_GTAG_ID ${GTAG_ID}

RUN npm run build
RUN npm run generate

FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /src/public /usr/share/nginx/html/
