FROM node:17-alpine

ENV TZ Asia/Tokyo

WORKDIR /

COPY package.json yarn.lock ./
RUN yarn install; \
  yarn cache clean

COPY . .
RUN yarn build

CMD ["yarn", "start"]
