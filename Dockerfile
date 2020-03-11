FROM node:12.14.0-alpine3.10 as builder

COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM nginx:1.17.5-alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html
