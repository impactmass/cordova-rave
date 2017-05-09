'use strict';

const Joi = require('joi');

const base = {
  'liveMode': Joi.string().empty('').default('y').valid(['y', 'n']),
  'PBFPubKey': Joi.string().required(),
  'amount': Joi.number().allow(''),
  'customer_email': Joi.string().email().allow(''),
  'currency': Joi.string().empty('').default('NGN'),
  'country': Joi.string().empty('').default('NG'),
  'custom_title': Joi.string().allow(''),
  'custom_description': Joi.string().allow(''),
  'redirect_url': Joi.string().uri().empty('').default(''),
  'custom_logo': Joi.string().uri().empty('').default('')
};

const dynamicFields = {
  'customer_email': Joi.string().email()
};

module.exports = {
  base, dynamicFields
};
