"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var numberInput = require('@ark-ui/react/number-input');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useNumberInputStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "numberInput" });
const NumberInputRootProvider = withProvider(numberInput.NumberInput.RootProvider, "root", { forwardAsChild: true });
const NumberInputRoot = withProvider(numberInput.NumberInput.Root, "root", { forwardAsChild: true });
const NumberInputPropsProvider = PropsProvider;
const NumberInputLabel = withContext(numberInput.NumberInput.Label, "label", { forwardAsChild: true });
const NumberInputInput = withContext(numberInput.NumberInput.Input, "input", { forwardAsChild: true });
const NumberInputIncrementTrigger = withContext(numberInput.NumberInput.IncrementTrigger, "incrementTrigger", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronUpIcon, {}) }
});
const NumberInputDecrementTrigger = withContext(numberInput.NumberInput.DecrementTrigger, "decrementTrigger", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronDownIcon, {}) }
});
const NumberInputControl = withContext(numberInput.NumberInput.Control, "control", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(NumberInputIncrementTrigger, {}),
      /* @__PURE__ */ jsxRuntime.jsx(NumberInputDecrementTrigger, {})
    ] })
  }
});
const NumberInputScrubber = withContext(numberInput.NumberInput.Scrubber, "scrubber", { forwardAsChild: true });
const NumberInputValueText = withContext(numberInput.NumberInput.ValueText, "valueText", { forwardAsChild: true });
const NumberInputContext = numberInput.NumberInput.Context;

exports.NumberInputContext = NumberInputContext;
exports.NumberInputControl = NumberInputControl;
exports.NumberInputDecrementTrigger = NumberInputDecrementTrigger;
exports.NumberInputIncrementTrigger = NumberInputIncrementTrigger;
exports.NumberInputInput = NumberInputInput;
exports.NumberInputLabel = NumberInputLabel;
exports.NumberInputPropsProvider = NumberInputPropsProvider;
exports.NumberInputRoot = NumberInputRoot;
exports.NumberInputRootProvider = NumberInputRootProvider;
exports.NumberInputScrubber = NumberInputScrubber;
exports.NumberInputValueText = NumberInputValueText;
exports.useNumberInputStyles = useNumberInputStyles;
