'use strict';

require('core-js/es6/promise');
const utils = require('./utils');
const raveConfig = require('../config.json');
const partial = require('lodash/partial');

window.initRavePay = initRavePay;

function initRavePay(email, amount, onclose, callback) {
  Promise.resolve(raveConfig)
    .then(partial(utils.mergeReqUserFields, amount, email))
    .then(utils.ensureRequired)
    .then((config) => window.getpaidSetup(utils.setupConf(onclose, callback, config)))
    .catch(utils.appendError);
}
