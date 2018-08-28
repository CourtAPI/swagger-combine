#!/usr/bin/env node

const SwaggerParser = require('swagger-parser');
const process       = require('process');

const args = process.argv.slice(2);

SwaggerParser.bundle(args.toString())
  .then((api) => { process.stdout.write(JSON.stringify(api)) })
  .catch((err) => console.error(err));
