"use strict";
import { isObject } from './is.js';

const isNotNullish = (element) => element != null;
function walkObject(target, predicate, options = {}) {
  const { stop, getKey } = options;
  function inner(value, path = []) {
    if (isObject(value) || Array.isArray(value)) {
      const result = {};
      for (const [prop, child] of Object.entries(value)) {
        const key = getKey?.(prop, child) ?? prop;
        const childPath = [...path, key];
        if (stop?.(value, childPath)) {
          return predicate(value, path);
        }
        const next = inner(child, childPath);
        if (isNotNullish(next)) {
          result[key] = next;
        }
      }
      return result;
    }
    return predicate(value, path);
  }
  return inner(target);
}
function mapObject(obj, fn) {
  if (Array.isArray(obj)) return obj.map((value) => fn(value));
  if (!isObject(obj)) {
    if (obj !== null && obj !== void 0) return fn(obj);
    else return obj;
  }
  return walkObject(obj, (value) => fn(value));
}

export { mapObject, walkObject };
