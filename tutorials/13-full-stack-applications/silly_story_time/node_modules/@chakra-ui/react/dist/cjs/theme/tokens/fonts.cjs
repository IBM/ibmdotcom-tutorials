"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
const fonts = config.defineTokens.fonts({
  heading: {
    value: `Inter, ${fallback}`
  },
  body: {
    value: `Inter, ${fallback}`
  },
  mono: {
    value: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  }
});

exports.fonts = fonts;
