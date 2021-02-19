FROM node:14.11.0-alpine

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start:prod" ]
