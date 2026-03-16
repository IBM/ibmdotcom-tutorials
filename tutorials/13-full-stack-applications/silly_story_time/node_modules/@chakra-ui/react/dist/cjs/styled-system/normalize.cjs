"use strict";
'use strict';

var walkObject = require('../utils/walk-object.cjs');

function createNormalizeFn(context) {
  const { utility, normalize } = context;
  const { hasShorthand, resolveShorthand } = utility;
  return function(styles) {
    return walkObject.walkObject(styles, normalize, {
      stop: (value) => Array.isArray(value),
      getKey: hasShorthand ? resolveShorthand : void 0
    });
  };
}

exports.createNormalizeFn = createNormalizeFn;
