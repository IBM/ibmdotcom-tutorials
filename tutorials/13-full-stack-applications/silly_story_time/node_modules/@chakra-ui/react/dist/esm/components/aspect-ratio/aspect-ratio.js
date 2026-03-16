"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef, Children } from 'react';
import { defineStyle } from '../../styled-system/config.js';
import { chakra } from '../../styled-system/factory.js';
import { cx } from '../../utils/cx.js';
import { mapObject } from '../../utils/walk-object.js';

const baseStyle = defineStyle({
  "& > *:not(style)": {
    overflow: "hidden",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  "& > img, & > video": {
    objectFit: "cover"
  }
});
const AspectRatio = forwardRef(
  function AspectRatio2(props, ref) {
    const { ratio = 4 / 3, children, className, ...rest } = props;
    const child = Children.only(children);
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        position: "relative",
        className: cx("chakra-aspect-ratio", className),
        _before: {
          height: 0,
          content: `""`,
          display: "block",
          paddingBottom: mapObject(ratio, (r) => `${1 / r * 100}%`)
        },
        ...rest,
        css: [baseStyle, props.css],
        children: child
      }
    );
  }
);

export { AspectRatio };
