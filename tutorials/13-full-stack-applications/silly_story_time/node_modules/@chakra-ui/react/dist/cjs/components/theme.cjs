"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('../utils/cx.cjs');
var factory = require('../styled-system/factory.cjs');

const Theme = React.forwardRef(
  function Theme2(props, ref) {
    const {
      appearance,
      style,
      className,
      hasBackground = true,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        color: "fg",
        bg: hasBackground ? "bg" : void 0,
        colorPalette: "gray",
        ...rest,
        className: cx.cx("chakra-theme", appearance, className),
        style: { ...style, colorScheme: appearance },
        ref
      }
    );
  }
);

exports.Theme = Theme;
