FROM node:8-alpine
WORKDIR /

ADD . /
RUN npm install
USER node
CMD ["/cli.js"]
