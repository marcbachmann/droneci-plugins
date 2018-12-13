# docker build -t marcbachman/eslint:5.10.0 .
FROM node:8-alpine
WORKDIR /

ADD . /
RUN npm install
USER node
CMD ["/cli.js"]
