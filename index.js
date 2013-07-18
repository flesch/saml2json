var xmldom = require('xmldom')
  , xpath = require('xpath')
  , saml2json = {}
  ;

saml2json.parse = function(response){

  var xml = new Buffer(response, 'base64').toString('ascii')
    , doc = new xmldom.DOMParser().parseFromString(xml)
    , profile = {}, attributes
    ;

  attributes = xpath.select('//*[local-name() = "AttributeStatement"]/*', doc);
  attributes.forEach(function(attribute){
    var name = xpath.select('string(@Name)', attribute).toLowerCase();    
    profile[name] = xpath.select('string(*[local-name() = "AttributeValue"]/text())', attribute);
  });

  return profile;
  
};

module.exports = saml2json;
