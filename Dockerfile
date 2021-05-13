FROM node:14.15.3-alpine

WORKDIR /usr/src

CMD ["/bin/sh", "-c", "node ./build/src/index.js"]

EXPOSE 3000
