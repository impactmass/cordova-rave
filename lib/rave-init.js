'use strict';

require('core-js/es6/promise');
const utils = require('./utils');
const raveConfig = require('../config.json');
const partial = require('lodash/partial');

window.initRavePay = initRavePay;

function initRavePay(options) {
  Promise.resolve(raveConfig)
    .then(partial(utils.mergeReqUserFields, options))
    .then(utils.ensureRequired)
    .then(window.getpaidSetup)
    .catch(utils.appendError);
}
