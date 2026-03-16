'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useProgressContext = require('./use-progress-context.cjs');

const ProgressRootProvider = react.forwardRef((props, ref) => {
  const [{ value: progress }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(progress.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useProgressContext.ProgressProvider, { value: progress, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
ProgressRootProvider.displayName = "ProgressRootProvider";

exports.ProgressRootProvider = ProgressRootProvider;
