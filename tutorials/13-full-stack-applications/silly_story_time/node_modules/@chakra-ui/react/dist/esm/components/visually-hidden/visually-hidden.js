"use strict";
"use client";
import { chakra } from '../../styled-system/factory.js';

const visuallyHiddenStyle = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
const VisuallyHidden = chakra("span", {
  base: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden, visuallyHiddenStyle };
