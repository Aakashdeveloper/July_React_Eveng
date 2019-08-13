FROM node:alpine
WORKDIR  '/app'
COPY package.json .
RUN npm install
copy . .
EXPOSE 6700
CMD ["npm", "start"]