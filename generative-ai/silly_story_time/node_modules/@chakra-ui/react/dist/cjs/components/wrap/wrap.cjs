"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var config = require('../../styled-system/config.cjs');
var factory = require('../../styled-system/factory.cjs');
var cx = require('../../utils/cx.cjs');

const Wrap = React.forwardRef(
  function Wrap2(props, ref) {
    const { gap = "0.5rem", justify, direction, align, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        gap,
        ...rest,
        className: cx.cx("chakra-wrap", props.className)
      }
    );
  }
);
Wrap.displayName = "Wrap";
const itemStyle = config.defineStyle({
  display: "flex",
  alignItems: "flex-start"
});
const WrapItem = React.forwardRef(
  function WrapItem2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        css: [itemStyle, props.css],
        ...props,
        className: cx.cx("chakra-wrap__listitem", props.className)
      }
    );
  }
);

exports.Wrap = Wrap;
exports.WrapItem = WrapItem;
