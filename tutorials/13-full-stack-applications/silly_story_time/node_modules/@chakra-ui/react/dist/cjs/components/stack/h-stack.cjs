"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var stack = require('./stack.cjs');

const HStack = React.forwardRef(
  function HStack2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(stack.Stack, { align: "center", ...props, direction: "row", ref });
  }
);

exports.HStack = HStack;
