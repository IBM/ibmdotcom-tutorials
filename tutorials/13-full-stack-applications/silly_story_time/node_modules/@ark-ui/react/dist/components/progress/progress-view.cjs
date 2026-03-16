'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useProgressContext = require('./use-progress-context.cjs');

const ProgressView = react.forwardRef((props, ref) => {
  const [viewProps, localProps] = createSplitProps.createSplitProps()(props, ["state"]);
  const progress = useProgressContext.useProgressContext();
  const mergedProps = react$1.mergeProps(progress.getViewProps(viewProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
ProgressView.displayName = "ProgressView";

exports.ProgressView = ProgressView;
