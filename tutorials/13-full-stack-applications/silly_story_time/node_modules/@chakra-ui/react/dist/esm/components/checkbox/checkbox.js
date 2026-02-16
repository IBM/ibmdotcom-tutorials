"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Checkbox, useCheckboxContext } from '@ark-ui/react/checkbox';
import { forwardRef } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { Checkmark } from '../checkmark/checkmark.js';

const {
  withProvider,
  withContext,
  useStyles: useCheckboxStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "checkbox" });
const CheckboxRootProvider = withProvider(Checkbox.RootProvider, "root", { forwardAsChild: true });
const CheckboxRoot = withProvider(
  Checkbox.Root,
  "root",
  { forwardAsChild: true }
);
const CheckboxPropsProvider = PropsProvider;
const CheckboxLabel = withContext(
  Checkbox.Label,
  "label",
  { forwardAsChild: true }
);
const CheckboxIndicator = forwardRef(function CheckboxIndicator2(props, ref) {
  const { checked, indeterminate, ...rest } = props;
  const api = useCheckboxContext();
  const styles = useCheckboxStyles();
  if (checked && api.checked) {
    return /* @__PURE__ */ jsx(
      chakra.svg,
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
    return /* @__PURE__ */ jsx(
      chakra.svg,
      {
        ref,
        asChild: true,
        ...rest,
        css: [styles.indicator, props.css],
        children: indeterminate
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Checkmark,
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
  Checkbox.Control,
  "control",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsx(CheckboxIndicator, {}) }
  }
);
const CheckboxGroup = chakra(
  Checkbox.Group,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    }
  },
  { forwardAsChild: true }
);
const CheckboxContext = Checkbox.Context;
const CheckboxHiddenInput = Checkbox.HiddenInput;

export { CheckboxContext, CheckboxControl, CheckboxGroup, CheckboxHiddenInput, CheckboxIndicator, CheckboxLabel, CheckboxPropsProvider, CheckboxRoot, CheckboxRootProvider, useCheckboxStyles };
