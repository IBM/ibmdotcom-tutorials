"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Square } from './square.js';

const Circle = forwardRef(
  function Circle2(props, ref) {
    const { size, ...rest } = props;
    return /* @__PURE__ */ jsx(Square, { size, ref, borderRadius: "9999px", ...rest });
  }
);

export { Circle };
