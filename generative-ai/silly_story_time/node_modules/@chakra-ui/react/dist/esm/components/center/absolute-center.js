"use strict";
"use client";
import { chakra } from '../../styled-system/factory.js';

const AbsoluteCenter = chakra("div", {
  base: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    axis: {
      horizontal: {
        insetStart: "50%",
        translate: "-50%",
        _rtl: {
          translate: "50%"
        }
      },
      vertical: {
        top: "50%",
        translate: "0 -50%"
      },
      both: {
        insetStart: "50%",
        top: "50%",
        translate: "-50% -50%",
        _rtl: {
          translate: "50% -50%"
        }
      }
    }
  },
  defaultVariants: {
    axis: "both"
  }
});
AbsoluteCenter.displayName = "AbsoluteCenter";

export { AbsoluteCenter };
