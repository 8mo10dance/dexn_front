FROM node:17-alpine

ENV TZ Asia/Tokyo

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

CMD ["yarn", "start"]
