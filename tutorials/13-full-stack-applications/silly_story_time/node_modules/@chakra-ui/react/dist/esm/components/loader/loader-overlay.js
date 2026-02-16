"use strict";
import { chakra } from '../../styled-system/factory.js';

const LoaderOverlay = chakra("div", {
  base: {
    pos: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "full",
    gap: "2"
  }
});

export { LoaderOverlay };
