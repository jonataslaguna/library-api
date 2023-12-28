FROM node:16.14

WORKDIR /app-backend

COPY package*.json ./

RUN npm install

EXPOSE 3001

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]