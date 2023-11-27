FROM ubuntu:20.04

ENV PORT=8080

RUN apt-get update && apt-get install --no-install-recommends -y \
    software-properties-common \
    wget \
    npm \
    && rm -rf /var/lib/apt/lists/*
RUN npm install npm@latest -g && \
    npm install n -g && \
    n latest

WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install --production

COPY . /src
RUN npm run build

RUN npm install -g serve

EXPOSE ${PORT}

CMD serve -s build -p ${PORT}
