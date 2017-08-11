FROM node:8.2.1-alpine
ENV NODE_ENV=production
RUN mkdir -p /usr/src/wowanalyzer
COPY . /usr/src/wowanalyzer
WORKDIR /usr/src/wowanalyzer/server
RUN npm install
USER node
CMD ["node","index.js"]
