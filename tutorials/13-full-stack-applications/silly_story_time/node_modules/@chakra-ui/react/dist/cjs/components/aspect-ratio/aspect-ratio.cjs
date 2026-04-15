"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var config = require('../../styled-system/config.cjs');
var factory = require('../../styled-system/factory.cjs');
var cx = require('../../utils/cx.cjs');
var walkObject = require('../../utils/walk-object.cjs');

const baseStyle = config.defineStyle({
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
const AspectRatio = React.forwardRef(
  function AspectRatio2(props, ref) {
    const { ratio = 4 / 3, children, className, ...rest } = props;
    const child = React.Children.only(children);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        position: "relative",
        className: cx.cx("chakra-aspect-ratio", className),
        _before: {
          height: 0,
          content: `""`,
          display: "block",
          paddingBottom: walkObject.mapObject(ratio, (r) => `${1 / r * 100}%`)
        },
        ...rest,
        css: [baseStyle, props.css],
        children: child
      }
    );
  }
);

exports.AspectRatio = AspectRatio;
