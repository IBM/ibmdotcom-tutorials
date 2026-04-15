"use strict";
"use client";
import { chakra } from '../../styled-system/factory.js';

const StackSeparator = chakra("div", {
  base: {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto"
  }
});
StackSeparator.displayName = "StackSeparator";

export { StackSeparator };
