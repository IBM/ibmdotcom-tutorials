"use strict";
"use client";
'use strict';

var factory = require('../../styled-system/factory.cjs');

const Em = factory.chakra("em", {
  base: {
    fontStyle: "italic"
  }
});

exports.Em = Em;
