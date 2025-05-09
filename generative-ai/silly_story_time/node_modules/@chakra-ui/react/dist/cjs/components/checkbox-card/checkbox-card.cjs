"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var checkbox = require('@ark-ui/react/checkbox');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var checkmark = require('../checkmark/checkmark.cjs');

const {
  withProvider,
  withContext,
  useStyles: useCheckboxCardStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "checkboxCard" });
const CheckboxCardRootProvider = withProvider(checkbox.Checkbox.RootProvider, "root", { forwardAsChild: true });
const CheckboxCardRoot = withProvider(checkbox.Checkbox.Root, "root", { forwardAsChild: true });
const CheckboxCardRootPropsProvider = PropsProvider;
const CheckboxCardLabel = withContext(checkbox.Checkbox.Label, "label", { forwardAsChild: true });
const CheckboxCardDescription = React.forwardRef(function CheckboxCardDescription2(props, ref) {
  const styles = useCheckboxCardStyles();
  const api = checkbox.useCheckboxContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      ...props,
      css: [styles.description, props.css],
      "data-disabled": api.disabled ? "" : void 0,
      "data-state": api.checked ? "checked" : "unchecked"
    }
  );
});
const CheckboxCardControl = withContext(checkbox.Checkbox.Control, "control", { forwardAsChild: true });
const CheckboxCardContent = withContext("div", "content");
const CheckboxCardIndicator = React.forwardRef(function CheckboxCardIndicator2(props, ref) {
  const api = checkbox.useCheckboxContext();
  const styles = useCheckboxCardStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(
    checkmark.Checkmark,
    {
      ref,
      checked: api.checked,
      indeterminate: api.indeterminate,
      disabled: api.disabled,
      unstyled: true,
      ...props,
      css: [styles.indicator, props.css]
    }
  );
});
const CheckboxCardAddon = withContext("div", "addon");
const CheckboxCardContext = checkbox.Checkbox.Context;
const CheckboxCardHiddenInput = checkbox.Checkbox.HiddenInput;

exports.CheckboxCardAddon = CheckboxCardAddon;
exports.CheckboxCardContent = CheckboxCardContent;
exports.CheckboxCardContext = CheckboxCardContext;
exports.CheckboxCardControl = CheckboxCardControl;
exports.CheckboxCardDescription = CheckboxCardDescription;
exports.CheckboxCardHiddenInput = CheckboxCardHiddenInput;
exports.CheckboxCardIndicator = CheckboxCardIndicator;
exports.CheckboxCardLabel = CheckboxCardLabel;
exports.CheckboxCardRoot = CheckboxCardRoot;
exports.CheckboxCardRootPropsProvider = CheckboxCardRootPropsProvider;
exports.CheckboxCardRootProvider = CheckboxCardRootProvider;
exports.useCheckboxCardStyles = useCheckboxCardStyles;
