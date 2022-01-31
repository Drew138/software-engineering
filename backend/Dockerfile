FROM node:16.9 AS dev

WORKDIR /usr/src/app/

COPY package*.json .

RUN npm install --include=dev

COPY . .
