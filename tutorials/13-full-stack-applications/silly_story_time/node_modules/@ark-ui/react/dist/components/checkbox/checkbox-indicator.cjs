'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useCheckboxContext = require('./use-checkbox-context.cjs');

const CheckboxIndicator = react.forwardRef((props, ref) => {
  const { indeterminate, ...rest } = props;
  const checkbox = useCheckboxContext.useCheckboxContext();
  const mergedProps = react$1.mergeProps(checkbox.getIndicatorProps(), rest);
  const isVisible = indeterminate ? checkbox.indeterminate : checkbox.checked;
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, hidden: !isVisible, ref });
});
CheckboxIndicator.displayName = "CheckboxIndicator";

exports.CheckboxIndicator = CheckboxIndicator;
