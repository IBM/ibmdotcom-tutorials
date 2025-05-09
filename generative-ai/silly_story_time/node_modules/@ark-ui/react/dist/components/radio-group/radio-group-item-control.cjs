'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useRadioGroupContext = require('./use-radio-group-context.cjs');
const useRadioGroupItemPropsContext = require('./use-radio-group-item-props-context.cjs');

const RadioGroupItemControl = react.forwardRef((props, ref) => {
  const radioGroup = useRadioGroupContext.useRadioGroupContext();
  const itemProps = useRadioGroupItemPropsContext.useRadioGroupItemPropsContext();
  const mergedProps = react$1.mergeProps(radioGroup.getItemControlProps(itemProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
RadioGroupItemControl.displayName = "RadioGroupItemControl";

exports.RadioGroupItemControl = RadioGroupItemControl;
