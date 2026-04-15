"use strict";
"use client";
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { NumberInput } from '@ark-ui/react/number-input';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { ChevronUpIcon, ChevronDownIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useNumberInputStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "numberInput" });
const NumberInputRootProvider = withProvider(NumberInput.RootProvider, "root", { forwardAsChild: true });
const NumberInputRoot = withProvider(NumberInput.Root, "root", { forwardAsChild: true });
const NumberInputPropsProvider = PropsProvider;
const NumberInputLabel = withContext(NumberInput.Label, "label", { forwardAsChild: true });
const NumberInputInput = withContext(NumberInput.Input, "input", { forwardAsChild: true });
const NumberInputIncrementTrigger = withContext(NumberInput.IncrementTrigger, "incrementTrigger", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsx(ChevronUpIcon, {}) }
});
const NumberInputDecrementTrigger = withContext(NumberInput.DecrementTrigger, "decrementTrigger", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) }
});
const NumberInputControl = withContext(NumberInput.Control, "control", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(NumberInputIncrementTrigger, {}),
      /* @__PURE__ */ jsx(NumberInputDecrementTrigger, {})
    ] })
  }
});
const NumberInputScrubber = withContext(NumberInput.Scrubber, "scrubber", { forwardAsChild: true });
const NumberInputValueText = withContext(NumberInput.ValueText, "valueText", { forwardAsChild: true });
const NumberInputContext = NumberInput.Context;

export { NumberInputContext, NumberInputControl, NumberInputDecrementTrigger, NumberInputIncrementTrigger, NumberInputInput, NumberInputLabel, NumberInputPropsProvider, NumberInputRoot, NumberInputRootProvider, NumberInputScrubber, NumberInputValueText, useNumberInputStyles };
