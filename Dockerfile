FROM node:latest
# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN npm install -g gatsby-cli
RUN npm install
RUN npm run build
CMD [ "npm", "run", "serve" ]