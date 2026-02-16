"use strict";
import { walkObject } from '../utils/walk-object.js';

function createNormalizeFn(context) {
  const { utility, normalize } = context;
  const { hasShorthand, resolveShorthand } = utility;
  return function(styles) {
    return walkObject(styles, normalize, {
      stop: (value) => Array.isArray(value),
      getKey: hasShorthand ? resolveShorthand : void 0
    });
  };
}

export { createNormalizeFn };
