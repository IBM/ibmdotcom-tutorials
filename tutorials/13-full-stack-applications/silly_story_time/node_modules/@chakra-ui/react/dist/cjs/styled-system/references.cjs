"use strict";
'use strict';

var is = require('../utils/is.cjs');

const REFERENCE_REGEX = /({([^}]*)})/g;
const CURLY_REGEX = /[{}]/g;
const TOKEN_PATH_REGEX = /\w+\.\w+/;
const getReferences = (value) => {
  if (!is.isString(value)) return [];
  const matches = value.match(REFERENCE_REGEX);
  if (!matches) return [];
  return matches.map((match) => match.replace(CURLY_REGEX, "")).map((value2) => value2.trim());
};
const hasReference = (value) => REFERENCE_REGEX.test(value);
function expandReferences(token) {
  if (!token.extensions?.references) {
    return token.extensions?.cssVar?.ref ?? token.value;
  }
  const references = token.extensions.references ?? {};
  token.value = Object.keys(references).reduce((valueStr, key) => {
    const referenceToken = references[key];
    if (referenceToken.extensions.conditions) {
      return valueStr;
    }
    const value = expandReferences(referenceToken);
    return valueStr.replace(`{${key}}`, value);
  }, token.value);
  delete token.extensions.references;
  return token.value;
}

exports.TOKEN_PATH_REGEX = TOKEN_PATH_REGEX;
exports.expandReferences = expandReferences;
exports.getReferences = getReferences;
exports.hasReference = hasReference;
