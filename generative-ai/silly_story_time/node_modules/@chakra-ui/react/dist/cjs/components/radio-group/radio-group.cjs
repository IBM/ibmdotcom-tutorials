"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var radioGroup = require('@ark-ui/react/radio-group');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var radiomark = require('../radiomark/radiomark.cjs');

const {
  withProvider,
  withContext,
  useStyles: useRadioGroupStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "radioGroup" });
const RadioGroupRootProvider = withProvider(radioGroup.RadioGroup.RootProvider, "root", { forwardAsChild: true });
const RadioGroupRoot = withProvider(
  radioGroup.RadioGroup.Root,
  "root",
  { forwardAsChild: true }
);
const RadioGroupPropsProvider = PropsProvider;
const RadioGroupLabel = withContext(radioGroup.RadioGroup.Label, "label", { forwardAsChild: true });
const RadioGroupItem = withContext(
  radioGroup.RadioGroup.Item,
  "item",
  { forwardAsChild: true }
);
const RadioGroupItemText = withContext(radioGroup.RadioGroup.ItemText, "itemText", { forwardAsChild: true });
const RadioGroupItemControl = withContext(radioGroup.RadioGroup.ItemControl, "itemControl", { forwardAsChild: true });
const RadioGroupItemIndicator = React.forwardRef(function RadioGroupItemIndicator2(props, ref) {
  const styles = useRadioGroupStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(radioGroup.RadioGroup.ItemContext, { children: (itemState) => /* @__PURE__ */ jsxRuntime.jsx(radioGroup.RadioGroup.ItemControl, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
    radiomark.Radiomark,
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
const RadioGroupContext = radioGroup.RadioGroup.Context;
const RadioGroupItemContext = radioGroup.RadioGroup.ItemContext;
const RadioGroupItemHiddenInput = radioGroup.RadioGroup.ItemHiddenInput;

exports.RadioGroupContext = RadioGroupContext;
exports.RadioGroupItem = RadioGroupItem;
exports.RadioGroupItemContext = RadioGroupItemContext;
exports.RadioGroupItemControl = RadioGroupItemControl;
exports.RadioGroupItemHiddenInput = RadioGroupItemHiddenInput;
exports.RadioGroupItemIndicator = RadioGroupItemIndicator;
exports.RadioGroupItemText = RadioGroupItemText;
exports.RadioGroupLabel = RadioGroupLabel;
exports.RadioGroupPropsProvider = RadioGroupPropsProvider;
exports.RadioGroupRoot = RadioGroupRoot;
exports.RadioGroupRootProvider = RadioGroupRootProvider;
exports.useRadioGroupStyles = useRadioGroupStyles;
