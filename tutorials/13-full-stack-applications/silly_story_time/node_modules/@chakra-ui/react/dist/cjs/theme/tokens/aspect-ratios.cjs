"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const aspectRatios = config.defineTokens.aspectRatios({
  square: { value: "1 / 1" },
  landscape: { value: "4 / 3" },
  portrait: { value: "3 / 4" },
  wide: { value: "16 / 9" },
  ultrawide: { value: "18 / 5" },
  golden: { value: "1.618 / 1" }
});

exports.aspectRatios = aspectRatios;
