'use strict';

const fs = require('fs'),
  path = require('path');

const prompt = require('prompt'),
  Bluebird = require('bluebird'),
  log = require('npmlog'),
  fetch = require('node-fetch'),
  Joi = require('joi');

Bluebird.promisifyAll(prompt);
Bluebird.promisifyAll(Joi);
Bluebird.promisifyAll(fs);

const raveTestUri = 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';
const raveLiveUri = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';

let raveUri = raveTestUri;

const configFile = path.resolve('./config.json');
const schema = require('../schemas').base;

log.info('This process will capture your Pay button setup most importantly Pub Key and txref');
log.info('Get these values from your Rave Dashboard. For optional fields, just click enter.');

prompt.start();
prompt.getAsync(Object.keys(schema))
  .then((result) => Joi.validateAsync(result, schema))
  .then((value) => {
    const config = value;
    if (config.liveMode === 'y') {
      raveUri = raveLiveUri;
    }
    delete config.liveMode;
    return fs.writeFileAsync(configFile, `${JSON.stringify(config, null, 2)}\n`);
  })
  .then((value) => log.info(`Successfully written config file to ${configFile}`))
  .tap(() =>
    fetch(raveUri)
      .then(res => res.text())
      .then(body => fs.writeFileAsync('rave-inline.js', body))
  )
  .catch(log.error);

