# docker build -t marcbachman/eslint:5.10.0 .
FROM node:12-alpine
USER node
ENV NODE_PATH /eslint-drone-plugin/node_modules
WORKDIR /eslint-drone-plugin

ADD package*.json /eslint-drone-plugin
RUN npm install && npm cache clean -f
ADD . /eslint-drone-plugin

ENTRYPOINT ["/eslint-drone-plugin/cli.js"]
