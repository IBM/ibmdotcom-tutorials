"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const borders = config.defineTokens.borders({
  xs: { value: "0.5px solid" },
  sm: { value: "1px solid" },
  md: { value: "2px solid" },
  lg: { value: "4px solid" },
  xl: { value: "8px solid" }
});

exports.borders = borders;
