FROM node:16.13.1-alpine3.14 as app
WORKDIR /app
COPY ["package.json",  "tsconfig.json", ".babelrc", "./"]
COPY ./src ./src
RUN npm install -D
CMD npm run start

FROM node:16.13.1-alpine3.14 as test 
WORKDIR /app
COPY ["package.json",  "tsconfig.json",  "./"]
COPY ./src ./src
RUN npm install -D
CMD npm run test
