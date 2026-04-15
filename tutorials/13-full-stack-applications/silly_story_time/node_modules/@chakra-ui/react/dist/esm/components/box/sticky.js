"use strict";
"use client";
import { chakra } from '../../styled-system/factory.js';

const Sticky = chakra("div", {
  base: {
    position: "sticky",
    top: 0
  }
});
Sticky.displayName = "Sticky";

export { Sticky };
