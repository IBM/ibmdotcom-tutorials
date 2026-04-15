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
  useStyles: useCheckboxStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "checkbox" });
const CheckboxRootProvider = withProvider(checkbox.Checkbox.RootProvider, "root", { forwardAsChild: true });
const CheckboxRoot = withProvider(
  checkbox.Checkbox.Root,
  "root",
  { forwardAsChild: true }
);
const CheckboxPropsProvider = PropsProvider;
const CheckboxLabel = withContext(
  checkbox.Checkbox.Label,
  "label",
  { forwardAsChild: true }
);
const CheckboxIndicator = React.forwardRef(function CheckboxIndicator2(props, ref) {
  const { checked, indeterminate, ...rest } = props;
  const api = checkbox.useCheckboxContext();
  const styles = useCheckboxStyles();
  if (checked && api.checked) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.svg,
      {
        ref,
        asChild: true,
        ...rest,
        css: [styles.indicator, props.css],
        children: checked
      }
    );
  }
  if (indeterminate && api.indeterminate) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.svg,
      {
        ref,
        asChild: true,
        ...rest,
        css: [styles.indicator, props.css],
        children: indeterminate
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    checkmark.Checkmark,
    {
      ref,
      checked: api.checked,
      indeterminate: api.indeterminate,
      disabled: api.disabled,
      unstyled: true,
      ...rest,
      css: [styles.indicator, props.css]
    }
  );
});
const CheckboxControl = withContext(
  checkbox.Checkbox.Control,
  "control",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxIndicator, {}) }
  }
);
const CheckboxGroup = factory.chakra(
  checkbox.Checkbox.Group,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    }
  },
  { forwardAsChild: true }
);
const CheckboxContext = checkbox.Checkbox.Context;
const CheckboxHiddenInput = checkbox.Checkbox.HiddenInput;

exports.CheckboxContext = CheckboxContext;
exports.CheckboxControl = CheckboxControl;
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxHiddenInput = CheckboxHiddenInput;
exports.CheckboxIndicator = CheckboxIndicator;
exports.CheckboxLabel = CheckboxLabel;
exports.CheckboxPropsProvider = CheckboxPropsProvider;
exports.CheckboxRoot = CheckboxRoot;
exports.CheckboxRootProvider = CheckboxRootProvider;
exports.useCheckboxStyles = useCheckboxStyles;
