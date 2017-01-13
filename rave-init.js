// TODOs:
// add a loader on clicking pay now. takes some secs before the rave modal shows up
// Other use cases: Covered "shopping cart" for now
// Add tests

require('core-js/es6/promise');
var Joi = require('joi');
var get = require('lodash/get');
var partial = require('lodash/partial');
var merge = require('lodash/merge');

var raveConfig = require('./config.json');
var reqFields = require('./schemas').dynamicFields;

function initRavePay(email, amount, onclose, callback) {
  Promise.resolve(raveConfig)
    .then(partial(mergeReqUserFields, amount, email))
    .then(ensureRequired)
    .then(partial(showModal, onclose, callback))
    .catch(appendError);
}

function mergeReqUserFields(amount, email, config) {
  // 'merge' here accounted for the case of user setting a constant amount
  // at which point initRavePay() is called with only email as arg
  return merge({}, config, {'customer_email': email, 'amount': amount});
}

function ensureRequired(data) {
  return new Promise(function (resolve, reject) {
    Joi.validate(data, reqFields, {stripUnknown: true}, (err, value) => {
      if (err) {
        reject({text: get(err, 'details[0].message')});
      } else {
        resolve(data);
      }
    });
  });
}

function showModal(onclose, callback, config) {
  let conf = merge({}, config, {onclose, callback});
  return window.getpaidSetup(conf);
}

function appendError(err) {
  var errorText = document.createElement('p');
  errorText.innerHTML = 'Error in Rave options: ' + err.text;
  errorText.style.cssText = 'text-align: center;font-weight: bold';
  document.querySelector('body').appendChild(errorText);
}

window.initRavePay = initRavePay;
