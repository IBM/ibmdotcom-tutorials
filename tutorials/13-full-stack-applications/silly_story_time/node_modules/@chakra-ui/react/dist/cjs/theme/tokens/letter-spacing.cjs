"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const letterSpacings = config.defineTokens.letterSpacings({
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  wide: { value: "0.025em" },
  wider: { value: "0.05em" },
  widest: { value: "0.1em" }
});

exports.letterSpacings = letterSpacings;
