"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const containerRecipe = config.defineRecipe({
  className: "chakra-container",
  base: {
    position: "relative",
    maxWidth: "8xl",
    w: "100%",
    mx: "auto",
    px: { base: "4", md: "6", lg: "8" }
  },
  variants: {
    centerContent: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    },
    fluid: {
      true: {
        maxWidth: "full"
      }
    }
  }
});

exports.containerRecipe = containerRecipe;
