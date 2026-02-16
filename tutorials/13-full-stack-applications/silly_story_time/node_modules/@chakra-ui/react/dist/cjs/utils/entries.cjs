"use strict";
'use strict';

function mapEntries(obj, f) {
  const result = {};
  for (const key in obj) {
    const kv = f(key, obj[key]);
    result[kv[0]] = kv[1];
  }
  return result;
}

exports.mapEntries = mapEntries;
