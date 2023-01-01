FROM node:16.13.1-alpine3.14 as app
WORKDIR /app
COPY ["package.json","package-lock.json" , "tsconfig.json", ".babelrc",".env" , "./"]
RUN npm install
RUN npm -g install typescript
COPY ./src ./src
