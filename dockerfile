FROM node:16.13.1-alpine3.14 as app
WORKDIR /app
COPY ["package.json","package-lock.json" , "tsconfig.json", ".babelrc", "./"]
COPY ./src ./src
RUN npm install -D && \
	npm run migrate
CMD npm run start

FROM node:16.13.1-alpine3.14 as test 
WORKDIR /app
COPY ["package.json",  "tsconfig.json",  "./"]
RUN npm install -D
COPY ./src ./src
RUN npm run migrate
CMD npm run test
