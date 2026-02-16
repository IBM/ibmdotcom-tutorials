"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Button } from './button.js';

const IconButton = forwardRef(
  function IconButton2(props, ref) {
    return /* @__PURE__ */ jsx(
      Button,
      {
        px: "0",
        py: "0",
        _icon: { fontSize: "1.2em" },
        ref,
        ...props
      }
    );
  }
);

export { IconButton };
