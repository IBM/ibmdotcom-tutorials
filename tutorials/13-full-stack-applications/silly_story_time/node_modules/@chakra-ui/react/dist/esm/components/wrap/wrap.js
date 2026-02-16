"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { defineStyle } from '../../styled-system/config.js';
import { chakra } from '../../styled-system/factory.js';
import { cx } from '../../utils/cx.js';

const Wrap = forwardRef(
  function Wrap2(props, ref) {
    const { gap = "0.5rem", justify, direction, align, ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        gap,
        ...rest,
        className: cx("chakra-wrap", props.className)
      }
    );
  }
);
Wrap.displayName = "Wrap";
const itemStyle = defineStyle({
  display: "flex",
  alignItems: "flex-start"
});
const WrapItem = forwardRef(
  function WrapItem2(props, ref) {
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        css: [itemStyle, props.css],
        ...props,
        className: cx("chakra-wrap__listitem", props.className)
      }
    );
  }
);

export { Wrap, WrapItem };
