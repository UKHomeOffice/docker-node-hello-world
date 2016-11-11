FROM quay.io/ukhomeofficedigital/nodejs-base:v6.9.1
WORKDIR /src
COPY . .
RUN npm install && npm test
EXPOSE 4000
ENV MYSUPERSECRET="default secret"
CMD npm start
