'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSplitterContext = require('./use-splitter-context.cjs');

const SplitterRootProvider = react.forwardRef((props, ref) => {
  const [{ value: splitter }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(splitter.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSplitterContext.SplitterProvider, { value: splitter, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
SplitterRootProvider.displayName = "SplitterRootProvider";

exports.SplitterRootProvider = SplitterRootProvider;
