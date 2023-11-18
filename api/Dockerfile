FROM node:latest

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install -g typescript && npm install

COPY . .

RUN npm run build


EXPOSE 3000

CMD ["npm", "start"]
