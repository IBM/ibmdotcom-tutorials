"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { isCssVar } from '../../utils/is.js';
import { isCssUnit } from '../../utils/unit.js';
import { mapObject } from '../../utils/walk-object.js';
import { chakra } from '../../styled-system/factory.js';

const valueFn = (v) => isCssUnit(v) || isCssVar(v) ? v : `token(spacing.${v}, ${v})`;
const Bleed = forwardRef(
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
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        ...rest,
        css: {
          "--bleed-inline-start": mapObject(inline ?? inlineStart, valueFn),
          "--bleed-inline-end": mapObject(inline ?? inlineEnd, valueFn),
          "--bleed-block-start": mapObject(block ?? blockStart, valueFn),
          "--bleed-block-end": mapObject(block ?? blockEnd, valueFn),
          marginInlineStart: "calc(var(--bleed-inline-start, 0) * -1)",
          marginInlineEnd: "calc(var(--bleed-inline-end, 0) * -1)",
          marginBlockStart: "calc(var(--bleed-block-start, 0) * -1)",
          marginBlockEnd: "calc(var(--bleed-block-end, 0) * -1)"
        }
      }
    );
  }
);

export { Bleed };
