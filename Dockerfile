FROM node:19-alpine

WORKDIR /home/node/app

USER node

CMD ["tail", "-f", "/dev/null"]

