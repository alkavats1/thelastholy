FROM node:14.18-alpine3.14 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/lastholy /usr/share/nginx/html
EXPOSE 80