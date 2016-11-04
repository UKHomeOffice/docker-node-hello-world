FROM node:4.2
COPY . /src
RUN cd /src && npm install
EXPOSE 4000
ENV MYSUPERSECRET="default secret"
CMD ["node", "/src/server.js"]
