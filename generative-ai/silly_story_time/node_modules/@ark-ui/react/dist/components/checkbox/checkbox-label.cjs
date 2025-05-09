'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useCheckboxContext = require('./use-checkbox-context.cjs');

const CheckboxLabel = react.forwardRef((props, ref) => {
  const checkbox = useCheckboxContext.useCheckboxContext();
  const mergedProps = react$1.mergeProps(checkbox.getLabelProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
CheckboxLabel.displayName = "CheckboxLabel";

exports.CheckboxLabel = CheckboxLabel;
