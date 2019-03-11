FROM node:10-alpine
ADD . /semantic-release-drone-plugin
WORKDIR /semantic-release-drone-plugin

RUN apk add git --no-cache && \
    npm install && \
    rm -rf \
      /usr/share/man/tmp/* \
      /root/.npm /root/.node-gyp \
      /usr/lib/node_modules

ENTRYPOINT ["/semantic-release-drone-plugin/node_modules/.bin/semantic-release"]
