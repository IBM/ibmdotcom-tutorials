"use strict";
'use strict';

var config = require('../styled-system/config.cjs');

const empty = "var(--chakra-empty,/*!*/ /*!*/)";
const globalCss = config.defineGlobalStyles({
  "*": {
    fontFeatureSettings: '"cv11"',
    "--ring-inset": empty,
    "--ring-offset-width": "0px",
    "--ring-offset-color": "#fff",
    "--ring-color": "rgba(66, 153, 225, 0.6)",
    "--ring-offset-shadow": "0 0 #0000",
    "--ring-shadow": "0 0 #0000",
    ...Object.fromEntries(
      [
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        "saturate",
        "sepia",
        "drop-shadow"
      ].map((prop) => [`--${prop}`, empty])
    ),
    ...Object.fromEntries(
      [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        "opacity",
        "saturate",
        "sepia"
      ].map((prop) => [`--backdrop-${prop}`, empty])
    ),
    "--global-font-mono": "fonts.mono",
    "--global-font-body": "fonts.body",
    "--global-color-border": "colors.border"
  },
  html: {
    color: "fg",
    bg: "bg",
    lineHeight: "1.5",
    colorPalette: "gray"
  },
  "*::placeholder, *[data-placeholder]": {
    color: "fg.muted/80"
  },
  "*::selection": {
    bg: "colorPalette.emphasized/80"
  }
});

exports.globalCss = globalCss;
