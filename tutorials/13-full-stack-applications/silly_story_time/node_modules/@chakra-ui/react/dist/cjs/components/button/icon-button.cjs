"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var button = require('./button.cjs');

const IconButton = React.forwardRef(
  function IconButton2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      button.Button,
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

exports.IconButton = IconButton;
