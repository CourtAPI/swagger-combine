# Dockerized swagger-combine npm package [![Docker Build Status](https://img.shields.io/docker/build/courtapi/swagger-combine.svg)](https://hub.docker.com/r/courtapi/swagger-combine/)

Combines multiple Swagger schemas into one dereferenced schema.

https://www.npmjs.com/package/swagger-combine

## Usage

```
docker run \
 -v `pwd`:/swagger -w /swagger \
  courtapi/swagger-combine CONF.yaml > DEST.json
```

Example
```
$ ls
conf.yaml  inc1.yaml inc2.yaml

$ cat conf.yaml
swagger: '2.0'
info:
  title: My App
  version: 0.0.0
apis:
  - url: inc1.yaml
  - url: inc2.yaml

$ docker run \
 -v `pwd`:/swagger -w /swagger \
  courtapi/swagger-combine conf.yaml > combined-swagger.json
  
# combined-swagger.json now contains all entries from inc{1,2}.yaml
```

