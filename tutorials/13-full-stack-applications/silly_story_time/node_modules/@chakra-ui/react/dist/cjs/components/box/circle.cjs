"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var square = require('./square.cjs');

const Circle = React.forwardRef(
  function Circle2(props, ref) {
    const { size, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(square.Square, { size, ref, borderRadius: "9999px", ...rest });
  }
);

exports.Circle = Circle;
