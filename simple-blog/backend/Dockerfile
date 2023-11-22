FROM node:18-alpine

ENV PORT=4000
ENV MONGODB_NAME=""
ENV MONGODB_DATABASE=""
ENV MONGODB_USERNAME=""
ENV MONGODB_PASSWORD=""
ENV MONGODB_PORT=0

WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install --production

COPY . /src

EXPOSE 500

CMD ["node", "index.js"]
