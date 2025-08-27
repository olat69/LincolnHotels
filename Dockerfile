FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM node:18-alpine as production

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY package*.json ./

RUN npm install --production

EXPOSE 5173

CMD ["node", "dist/main.js"]


