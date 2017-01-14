'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const _ =  require('lodash');
const expect = chai.expect;

const utils = require('../lib/utils.js');

chai.use(chaiAsPromised);
chai.should();

let config = {
  'PBFPubKey': 'FLWPUBK-5859696-X',
  'txref': 'my-ref',
  'amount': 15,
  'customer_email': '',
  'currency': 'NGN',
  'country': 'NG',
  'custom_title': 'Shopp Hoodie Store',
  'custom_description': 'Shopp Hoodie Store Pay',
  'redirect_url': '',
  'custom_logo': 'http://image.flaticon.com/teams/1-freepik.jpg'
};

describe('utils', function () {
  let amount = 1500;
  let email = 's@g.co';

  it('.mergeReqUserFields should override amount set in config with app-provided amount', function () {
    let result = utils.mergeReqUserFields(amount, email, config);
    expect(result.amount).to.equal(1500);
  });

  it('.mergeReqUserFields should keep amount set in config if no app-provided amount', function () {
    let result = utils.mergeReqUserFields(undefined, email, config);
    expect(result.amount).to.equal(15);
  });

  it('.mergeReqUserFields should leave amount blank if no amount in config & no app-provided amount', function () {
    let conf = _.assign(config, {'amount': ''});
    let result = utils.mergeReqUserFields(undefined, email, conf);
    expect(result.amount).to.equal('');
  });

  it('.ensureRequired should reject when no customer_email is provided', function () {
    return utils.ensureRequired(config).should.be.rejected;
  });

  it('.ensureRequired should resolve when customer_email is provided', function () {
    let conf = _.assign(config, {'customer_email': 's@g.co'});
    return utils.ensureRequired(conf).should.be.fulfilled;
  });
});
