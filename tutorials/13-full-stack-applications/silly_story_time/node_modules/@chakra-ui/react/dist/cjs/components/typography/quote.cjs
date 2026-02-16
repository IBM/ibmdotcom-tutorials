"use strict";
"use client";
'use strict';

var factory = require('../../styled-system/factory.cjs');

const Quote = factory.chakra("q", {
  base: {
    fontWeight: "bold",
    lineHeight: "1.2"
  }
});

exports.Quote = Quote;
