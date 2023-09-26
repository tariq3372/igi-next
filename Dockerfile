FROM node:18-alpine

WORKDIR /igi

COPY . .
RUN npm install --production
RUN npm run build
CMD ["npm","start"]