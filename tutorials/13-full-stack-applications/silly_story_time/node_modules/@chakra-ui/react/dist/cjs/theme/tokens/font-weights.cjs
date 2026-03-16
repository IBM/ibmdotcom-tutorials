"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const fontWeights = config.defineTokens.fontWeights({
  thin: { value: "100" },
  extralight: { value: "200" },
  light: { value: "300" },
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
  extrabold: { value: "800" },
  black: { value: "900" }
});

exports.fontWeights = fontWeights;
