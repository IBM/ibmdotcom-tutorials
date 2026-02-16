"use strict";
"use client";
'use strict';

var factory = require('../../styled-system/factory.cjs');

const Sticky = factory.chakra("div", {
  base: {
    position: "sticky",
    top: 0
  }
});
Sticky.displayName = "Sticky";

exports.Sticky = Sticky;
