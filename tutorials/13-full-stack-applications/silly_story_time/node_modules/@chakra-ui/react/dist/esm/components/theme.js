"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { cx } from '../utils/cx.js';
import { chakra } from '../styled-system/factory.js';

const Theme = forwardRef(
  function Theme2(props, ref) {
    const {
      appearance,
      style,
      className,
      hasBackground = true,
      ...rest
    } = props;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        color: "fg",
        bg: hasBackground ? "bg" : void 0,
        colorPalette: "gray",
        ...rest,
        className: cx("chakra-theme", appearance, className),
        style: { ...style, colorScheme: appearance },
        ref
      }
    );
  }
);

export { Theme };
