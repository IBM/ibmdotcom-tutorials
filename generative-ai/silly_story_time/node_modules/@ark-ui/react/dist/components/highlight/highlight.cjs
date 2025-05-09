'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const useHighlight = require('./use-highlight.cjs');

const Highlight = (props) => {
  if (typeof props.text !== "string") {
    throw new Error("[ark-ui/highlight] text must be a string");
  }
  const [highlightProps, localProps] = createSplitProps.createSplitProps()(props, [
    "query",
    "text",
    "ignoreCase",
    "matchAll"
  ]);
  const chunks = useHighlight.useHighlight(highlightProps);
  return /* @__PURE__ */ jsxRuntime.jsx(react.Fragment, { children: chunks.map(
    ({ text, match }, i) => match ? /* @__PURE__ */ jsxRuntime.jsx("mark", { ...localProps, children: text }, i) : /* @__PURE__ */ jsxRuntime.jsx(react.Fragment, { children: text }, i)
  ) });
};

exports.Highlight = Highlight;
