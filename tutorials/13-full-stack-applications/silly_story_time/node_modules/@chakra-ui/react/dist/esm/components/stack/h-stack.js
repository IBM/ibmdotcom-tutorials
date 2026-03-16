"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Stack } from './stack.js';

const HStack = forwardRef(
  function HStack2(props, ref) {
    return /* @__PURE__ */ jsx(Stack, { align: "center", ...props, direction: "row", ref });
  }
);

export { HStack };
