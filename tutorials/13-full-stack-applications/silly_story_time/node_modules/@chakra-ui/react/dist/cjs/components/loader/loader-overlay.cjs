"use strict";
'use strict';

var factory = require('../../styled-system/factory.cjs');

const LoaderOverlay = factory.chakra("div", {
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

exports.LoaderOverlay = LoaderOverlay;
