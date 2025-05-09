'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useProgressContext = require('./use-progress-context.cjs');

const ProgressValueText = react.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const progress = useProgressContext.useProgressContext();
  const mergedProps = react$1.mergeProps(progress.getValueTextProps(), rest);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: children || progress.percentAsString });
});
ProgressValueText.displayName = "ProgressValueText";

exports.ProgressValueText = ProgressValueText;
