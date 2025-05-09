"use strict";
"use client";
'use strict';

var factory = require('../../styled-system/factory.cjs');

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
const VisuallyHidden = factory.chakra("span", {
  base: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";

exports.VisuallyHidden = VisuallyHidden;
exports.visuallyHiddenStyle = visuallyHiddenStyle;
