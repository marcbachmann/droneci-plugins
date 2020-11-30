# docker build -t marcbachman/eslint:7.14.0 .
FROM node:14-alpine
USER node
ENV NODE_PATH /eslint-drone-plugin/node_modules
WORKDIR /eslint-drone-plugin

ADD package*.json /eslint-drone-plugin
RUN npm ci && npm cache clean -f
ADD . /eslint-drone-plugin

ENTRYPOINT ["/eslint-drone-plugin/cli.js"]
