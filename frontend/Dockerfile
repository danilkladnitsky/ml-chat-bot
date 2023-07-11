FROM node:16 as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .

ARG API_HOST
ARG SOCKET_HOST

ENV API_HOST=${API_HOST}
ENV SOCKET_HOST=${SOCKET_HOST}

FROM base as build
RUN npm run build

FROM nginx:latest as production
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
