# docker build -t marcbachman/eslint:5.10.0 .
FROM node:10-alpine
ADD . /eslint-drone-plugin
WORKDIR /eslint-drone-plugin

RUN npm install
USER node
ENTRYPOINT ["/eslint-drone-plugin/cli.js"]
