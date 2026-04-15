"use strict";
'use strict';

function mapToJson(map) {
  const obj = {};
  map.forEach((value, key) => {
    if (value instanceof Map) {
      obj[key] = Object.fromEntries(value);
    } else {
      obj[key] = value;
    }
  });
  return obj;
}

exports.mapToJson = mapToJson;
