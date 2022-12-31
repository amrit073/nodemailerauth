FROM node:16.13.1-alpine3.14 as app
WORKDIR /app
COPY ["package.json","package-lock.json" , "tsconfig.json", ".babelrc", "./"]
RUN npm install
RUN npm -g install typescript
COPY ./src ./src
RUN apk add --no-cache git bash
RUN git clone https://github.com/vishnubob/wait-for-it.git
