"use strict";
"use client";
'use strict';

var factory = require('../../styled-system/factory.cjs');

const Spacer = factory.chakra("div", {
  base: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

exports.Spacer = Spacer;
