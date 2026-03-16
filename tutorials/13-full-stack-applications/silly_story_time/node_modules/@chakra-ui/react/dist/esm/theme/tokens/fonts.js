"use strict";
import { defineTokens } from '../../styled-system/config.js';

const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
const fonts = defineTokens.fonts({
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

export { fonts };
