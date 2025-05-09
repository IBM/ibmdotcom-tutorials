'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useRadioGroupContext = require('./use-radio-group-context.cjs');

const RadioGroupLabel = react.forwardRef((props, ref) => {
  const radioGroup = useRadioGroupContext.useRadioGroupContext();
  const mergedProps = react$1.mergeProps(radioGroup.getLabelProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref });
});
RadioGroupLabel.displayName = "RadioGroupLabel";

exports.RadioGroupLabel = RadioGroupLabel;
