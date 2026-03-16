"use strict";
"use client";
'use strict';

var factory = require('../../styled-system/factory.cjs');

const StackSeparator = factory.chakra("div", {
  base: {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto"
  }
});
StackSeparator.displayName = "StackSeparator";

exports.StackSeparator = StackSeparator;
