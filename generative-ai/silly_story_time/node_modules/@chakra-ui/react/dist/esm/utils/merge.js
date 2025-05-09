"use strict";
import { isObject } from './is.js';

function merge(target, source) {
  if (source == null) return target;
  for (const key of Object.keys(source)) {
    if (source[key] === void 0 || key === "__proto__") continue;
    if (!isObject(target[key]) && isObject(source[key])) {
      Object.assign(target, { [key]: source[key] });
    } else if (target[key] && isObject(source[key])) {
      merge(target[key], source[key]);
    } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
      let i = 0;
      for (; i < source[key].length; i++) {
        if (isObject(target[key][i]) && isObject(source[key][i])) {
          merge(target[key][i], source[key][i]);
        } else {
          target[key][i] = source[key][i];
        }
      }
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  }
  return target;
}
function mergeWith(target, ...sources) {
  for (const source of sources) {
    merge(target, source);
  }
  return target;
}

export { mergeWith };
