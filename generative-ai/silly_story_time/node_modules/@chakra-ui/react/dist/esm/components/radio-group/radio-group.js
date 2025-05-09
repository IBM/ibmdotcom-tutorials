"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { RadioGroup } from '@ark-ui/react/radio-group';
import { forwardRef } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { Radiomark } from '../radiomark/radiomark.js';

const {
  withProvider,
  withContext,
  useStyles: useRadioGroupStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "radioGroup" });
const RadioGroupRootProvider = withProvider(RadioGroup.RootProvider, "root", { forwardAsChild: true });
const RadioGroupRoot = withProvider(
  RadioGroup.Root,
  "root",
  { forwardAsChild: true }
);
const RadioGroupPropsProvider = PropsProvider;
const RadioGroupLabel = withContext(RadioGroup.Label, "label", { forwardAsChild: true });
const RadioGroupItem = withContext(
  RadioGroup.Item,
  "item",
  { forwardAsChild: true }
);
const RadioGroupItemText = withContext(RadioGroup.ItemText, "itemText", { forwardAsChild: true });
const RadioGroupItemControl = withContext(RadioGroup.ItemControl, "itemControl", { forwardAsChild: true });
const RadioGroupItemIndicator = forwardRef(function RadioGroupItemIndicator2(props, ref) {
  const styles = useRadioGroupStyles();
  return /* @__PURE__ */ jsx(RadioGroup.ItemContext, { children: (itemState) => /* @__PURE__ */ jsx(RadioGroup.ItemControl, { asChild: true, children: /* @__PURE__ */ jsx(
    Radiomark,
    {
      ref,
      unstyled: true,
      ...props,
      checked: itemState.checked,
      disabled: itemState.disabled,
      css: [styles["itemControl"], props.css]
    }
  ) }) });
});
const RadioGroupContext = RadioGroup.Context;
const RadioGroupItemContext = RadioGroup.ItemContext;
const RadioGroupItemHiddenInput = RadioGroup.ItemHiddenInput;

export { RadioGroupContext, RadioGroupItem, RadioGroupItemContext, RadioGroupItemControl, RadioGroupItemHiddenInput, RadioGroupItemIndicator, RadioGroupItemText, RadioGroupLabel, RadioGroupPropsProvider, RadioGroupRoot, RadioGroupRootProvider, useRadioGroupStyles };
