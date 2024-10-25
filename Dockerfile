FROM node:22@sha256:69e667a79aa41ec0db50bc452a60e705ca16f35285eaf037ebe627a65a5cdf52 AS frontend-builder

WORKDIR /frontendcompiled

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest
COPY --from=frontend-builder ./frontendcompiled/dist /usr/share/nginx/html
COPY --from=frontend-builder ./frontendcompiled/nginx.conf /etc/nginx/conf.d/default.conf