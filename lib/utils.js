'use strict';

const Joi = require('joi');
const get = require('lodash/get');
const merge = require('lodash/merge');

const reqFields = require('../schemas').dynamicFields;

function mergeReqUserFields(amount, email, config) {
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

function setupConf(onclose, callback, config) {
  return merge({}, config, {onclose, callback});
}

function appendError(err) {
  var errorText = document.createElement('p');
  errorText.innerHTML = 'Error in Rave options: ' + err.text;
  errorText.style.cssText = 'text-align: center;font-weight: bold';
  return document.querySelector('body').appendChild(errorText);
}

module.exports = {
  setupConf,
  mergeReqUserFields,
  ensureRequired,
  appendError
};
