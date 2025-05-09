"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Box } from './box.js';

const Square = forwardRef(
  function Square2(props, ref) {
    const { size, ...rest } = props;
    return /* @__PURE__ */ jsx(
      Box,
      {
        ...rest,
        ref,
        boxSize: size,
        css: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          flexGrow: 0,
          ...props.css
        }
      }
    );
  }
);

export { Square };
