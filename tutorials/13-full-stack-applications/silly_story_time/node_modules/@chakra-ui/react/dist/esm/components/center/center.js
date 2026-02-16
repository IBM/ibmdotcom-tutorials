"use strict";
"use client";
import { chakra } from '../../styled-system/factory.js';

const Center = chakra("div", {
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

export { Center };
