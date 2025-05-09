'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useNumberInput = require('./use-number-input.cjs');
const useNumberInputContext = require('./use-number-input-context.cjs');

const NumberInputRoot = react.forwardRef((props, ref) => {
  const [useNumberInputProps, localProps] = createSplitProps.createSplitProps()(props, [
    "allowMouseWheel",
    "allowOverflow",
    "clampValueOnBlur",
    "defaultValue",
    "disabled",
    "focusInputOnChange",
    "form",
    "formatOptions",
    "id",
    "ids",
    "inputMode",
    "invalid",
    "locale",
    "max",
    "min",
    "name",
    "onFocusChange",
    "onValueChange",
    "onValueInvalid",
    "pattern",
    "readOnly",
    "required",
    "spinOnPress",
    "step",
    "translations",
    "value"
  ]);
  const numberInput = useNumberInput.useNumberInput(useNumberInputProps);
  const mergedProps = react$1.mergeProps(numberInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useNumberInputContext.NumberInputProvider, { value: numberInput, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
NumberInputRoot.displayName = "NumberInputRoot";

exports.NumberInputRoot = NumberInputRoot;
