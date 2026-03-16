"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var highlight = require('@ark-ui/react/highlight');
var React = require('react');
var mark = require('../typography/mark.cjs');
var _for = require('../for/for.cjs');

function Highlight(props) {
  const { children, query, ignoreCase, matchAll, styles } = props;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = highlight.useHighlight({
    query,
    text: children,
    matchAll,
    ignoreCase
  });
  return /* @__PURE__ */ jsxRuntime.jsx(_for.For, { each: chunks, children: (chunk, index) => {
    return chunk.match ? /* @__PURE__ */ jsxRuntime.jsx(mark.Mark, { css: styles, children: chunk.text }, index) : /* @__PURE__ */ jsxRuntime.jsx(React.Fragment, { children: chunk.text }, index);
  } });
}

exports.Highlight = Highlight;
