FROM node:6-alpine
WORKDIR /src
COPY . .
RUN npm install && npm test
EXPOSE 4000
ENV MYSUPERSECRET="default secret"
CMD npm start

ARG BUILDDATE
ARG VCSREF
ARG VERSION

ENV BUILDDATE ${BUILDDATE}
ENV VCSREF ${VCSREF}
ENV VERSION ${VERSION}

LABEL \
  org.label-schema.name="HODDAT Hello World Example" \
  org.label-schema.description="Home Office Digital - Hello World Node Docker Container Example" \
  org.label-schema.vendor="ukhomeofficedigital" \
  org.label-schema.url="https://github.com/UKHomeOffice/docker-node-hello-world" \
  org.label-schema.usage="https://github.com/UKHomeOffice/docker-node-hello-world/readme.md" \
  org.label-schema.vcs-url="https://github.com/UKHomeOffice/docker-node-hello-world" \
  org.label-schema.vcs-ref="${VCSREF}" \
  org.label-schema.build-date="${BUILDDATE}" \
  org.label-schema.version="${VERSION}" \
  org.label-schema.license="MIT" \
  org.label-schema.docker.schema-version="1.0" \
  org.label-schema.docker.cmd="docker run -it -rm --name hello-world -p 8080:4000 hello-world"
