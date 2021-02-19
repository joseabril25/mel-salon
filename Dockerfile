FROM node:14-alpine

WORKDIR /app

COPY ./ ./

RUN npm ci

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start:prod" ]
