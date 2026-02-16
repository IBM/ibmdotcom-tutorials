"use strict";
"use client";
import { chakra } from '../../styled-system/factory.js';

const Spacer = chakra("div", {
  base: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

export { Spacer };
