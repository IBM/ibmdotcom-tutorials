"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var stack = require('./stack.cjs');

const VStack = React.forwardRef(
  function VStack2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(stack.Stack, { align: "center", ...props, direction: "column", ref });
  }
);

exports.VStack = VStack;
