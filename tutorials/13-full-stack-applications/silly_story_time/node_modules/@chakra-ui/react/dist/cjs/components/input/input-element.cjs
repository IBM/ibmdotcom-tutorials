"use strict";
"use client";
'use strict';

var factory = require('../../styled-system/factory.cjs');

const InputElement = factory.chakra("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
    color: "fg.muted",
    height: "full",
    fontSize: "sm",
    px: "3"
  },
  variants: {
    placement: {
      start: {
        insetInlineStart: "0"
      },
      end: {
        insetInlineEnd: "0"
      }
    }
  }
});

exports.InputElement = InputElement;
