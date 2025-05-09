"use strict";
import { walkObject } from './walk-object.js';

function flatten(values, stop) {
  const result = {};
  walkObject(
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

export { flatten };
