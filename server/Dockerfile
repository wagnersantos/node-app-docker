# Specify a base image
FROM node:12.13.0-alpine AS alpine

WORKDIR /app

COPY package.json .
RUN yarn install 
COPY . .

CMD ["yarn", "start"]