"use strict";
"use client";
import { chakra } from '../../styled-system/factory.js';

const InputElement = chakra("div", {
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

export { InputElement };
