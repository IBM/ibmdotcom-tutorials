"use strict";
'use strict';

var is = require('./is.cjs');

const splitPropFn = (props, predicate) => {
  const rest = {};
  const result = {};
  const allKeys = Object.keys(props);
  for (const key of allKeys) {
    if (predicate(key)) {
      result[key] = props[key];
    } else {
      rest[key] = props[key];
    }
  }
  return [result, rest];
};
const splitProps = (props, keys) => {
  const predicate = is.isFunction(keys) ? keys : (key) => keys.includes(key);
  return splitPropFn(props, predicate);
};
const createSplitProps = (keys) => {
  return function split(props) {
    return splitProps(props, keys);
  };
};

exports.createSplitProps = createSplitProps;
exports.splitProps = splitProps;
