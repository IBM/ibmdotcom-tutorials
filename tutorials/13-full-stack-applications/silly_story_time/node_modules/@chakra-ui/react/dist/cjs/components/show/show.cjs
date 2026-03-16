"use strict";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function Show(props) {
  const { when, fallback, children } = props;
  let result;
  if (!when) {
    result = fallback;
  } else {
    result = typeof children === "function" ? children(when) : children;
  }
  return React.isValidElement(result) ? result : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: result });
}

exports.Show = Show;
