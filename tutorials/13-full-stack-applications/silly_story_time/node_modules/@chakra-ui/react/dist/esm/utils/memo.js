"use strict";
import stringify from 'fast-safe-stringify';

const memo = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  function get(...args) {
    const key = args.map((v) => stringify(v)).join("|");
    if (cache[key] === void 0) cache[key] = fn(...args);
    return cache[key];
  }
  return get;
};

export { memo };
