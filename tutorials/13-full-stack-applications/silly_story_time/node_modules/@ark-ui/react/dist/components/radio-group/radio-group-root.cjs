'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useRadioGroup = require('./use-radio-group.cjs');
const useRadioGroupContext = require('./use-radio-group-context.cjs');

const RadioGroupRoot = react.forwardRef((props, ref) => {
  const [useRadioGroupProps, localProps] = createSplitProps.createSplitProps()(props, [
    "defaultValue",
    "disabled",
    "form",
    "id",
    "ids",
    "name",
    "onValueChange",
    "orientation",
    "readOnly",
    "value"
  ]);
  const radioGroup = useRadioGroup.useRadioGroup(useRadioGroupProps);
  const mergedProps = react$1.mergeProps(radioGroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useRadioGroupContext.RadioGroupProvider, { value: radioGroup, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
RadioGroupRoot.displayName = "RadioGroupRoot";

exports.RadioGroupRoot = RadioGroupRoot;
