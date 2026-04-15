"use strict";
'use strict';

var stringify = require('fast-safe-stringify');

const memo = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  function get(...args) {
    const key = args.map((v) => stringify(v)).join("|");
    if (cache[key] === void 0) cache[key] = fn(...args);
    return cache[key];
  }
  return get;
};

exports.memo = memo;
