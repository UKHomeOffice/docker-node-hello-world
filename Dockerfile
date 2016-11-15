FROM node:6-alpine
WORKDIR /src
COPY . .
RUN npm install && npm test
EXPOSE 4000
ENV MYSUPERSECRET="default secret"
CMD npm start
