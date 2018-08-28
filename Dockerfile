FROM node:10.6.0-slim

RUN mkdir /app && chmod 755 /app

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

ENTRYPOINT ["/app/swagger-combine.js"]
