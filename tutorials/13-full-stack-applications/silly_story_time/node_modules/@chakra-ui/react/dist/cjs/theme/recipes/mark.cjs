"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const markRecipe = config.defineRecipe({
  className: "chakra-mark",
  base: {
    bg: "transparent",
    color: "inherit",
    whiteSpace: "nowrap"
  },
  variants: {
    variant: {
      subtle: {
        bg: "colorPalette.subtle",
        color: "inherit"
      },
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast"
      },
      text: {
        fontWeight: "medium"
      },
      plain: {}
    }
  }
});

exports.markRecipe = markRecipe;
