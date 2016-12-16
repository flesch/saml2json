'use strict';

const { DOMParser } = require('xmldom');
const { select } = require('xpath');

const parse = (assertion) => {

  if (!assertion) { throw new Error('A SAML assertion is required!'); }

  const xml = new Buffer(assertion, 'base64').toString('ascii');
  const doc = new DOMParser().parseFromString(xml);

  const statements = select('//*[local-name() = "AttributeStatement"]/*', doc).map(statement => {
    const attribute = select('string(@Name)', statement);
    return { [attribute]: select('string(*[local-name() = "AttributeValue"]/text())', statement) };
  });

  return Object.assign.apply({}, statements);

};

module.exports.parse = parse;
