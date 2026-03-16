"use strict";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var icons = require('../icons.cjs');
var iconButton = require('./icon-button.cjs');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const CloseButton = React__namespace.forwardRef(function CloseButton2(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(iconButton.IconButton, { variant: "ghost", "aria-label": "Close", ref, ...props, children: props.children ?? /* @__PURE__ */ jsxRuntime.jsx(icons.CloseIcon, {}) });
});

exports.CloseButton = CloseButton;
