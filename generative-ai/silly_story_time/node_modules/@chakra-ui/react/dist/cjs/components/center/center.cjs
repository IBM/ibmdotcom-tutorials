"use strict";
"use client";
'use strict';

var factory = require('../../styled-system/factory.cjs');

const Center = factory.chakra("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    inline: {
      true: {
        display: "inline-flex"
      }
    }
  }
});
Center.displayName = "Center";

exports.Center = Center;
