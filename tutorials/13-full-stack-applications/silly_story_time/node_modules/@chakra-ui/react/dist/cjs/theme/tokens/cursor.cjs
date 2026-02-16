"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const cursor = config.defineTokens.cursor({
  button: { value: "pointer" },
  checkbox: { value: "default" },
  disabled: { value: "not-allowed" },
  menuitem: { value: "default" },
  option: { value: "default" },
  radio: { value: "default" },
  slider: { value: "default" },
  switch: { value: "pointer" }
});

exports.cursor = cursor;
