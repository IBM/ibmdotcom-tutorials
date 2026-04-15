"use strict";
'use strict';

var walkObject = require('./walk-object.cjs');

function flatten(values, stop) {
  const result = {};
  walkObject.walkObject(
    values,
    (token, paths) => {
      if (token) {
        result[paths.join(".")] = token.value;
      }
    },
    { stop }
  );
  return result;
}

exports.flatten = flatten;
