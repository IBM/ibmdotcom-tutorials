"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var is = require('../../utils/is.cjs');
var unit = require('../../utils/unit.cjs');
var walkObject = require('../../utils/walk-object.cjs');
var factory = require('../../styled-system/factory.cjs');

const valueFn = (v) => unit.isCssUnit(v) || is.isCssVar(v) ? v : `token(spacing.${v}, ${v})`;
const Bleed = React.forwardRef(
  function Bleed2(props, ref) {
    const {
      inline,
      inlineStart,
      inlineEnd,
      block,
      blockStart,
      blockEnd,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        ...rest,
        css: {
          "--bleed-inline-start": walkObject.mapObject(inline ?? inlineStart, valueFn),
          "--bleed-inline-end": walkObject.mapObject(inline ?? inlineEnd, valueFn),
          "--bleed-block-start": walkObject.mapObject(block ?? blockStart, valueFn),
          "--bleed-block-end": walkObject.mapObject(block ?? blockEnd, valueFn),
          marginInlineStart: "calc(var(--bleed-inline-start, 0) * -1)",
          marginInlineEnd: "calc(var(--bleed-inline-end, 0) * -1)",
          marginBlockStart: "calc(var(--bleed-block-start, 0) * -1)",
          marginBlockEnd: "calc(var(--bleed-block-end, 0) * -1)"
        }
      }
    );
  }
);

exports.Bleed = Bleed;
