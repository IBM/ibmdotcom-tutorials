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
  useStyles: useCheckboxCardStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "checkboxCard" });
const CheckboxCardRootProvider = withProvider(Checkbox.RootProvider, "root", { forwardAsChild: true });
const CheckboxCardRoot = withProvider(Checkbox.Root, "root", { forwardAsChild: true });
const CheckboxCardRootPropsProvider = PropsProvider;
const CheckboxCardLabel = withContext(Checkbox.Label, "label", { forwardAsChild: true });
const CheckboxCardDescription = forwardRef(function CheckboxCardDescription2(props, ref) {
  const styles = useCheckboxCardStyles();
  const api = useCheckboxContext();
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      ...props,
      css: [styles.description, props.css],
      "data-disabled": api.disabled ? "" : void 0,
      "data-state": api.checked ? "checked" : "unchecked"
    }
  );
});
const CheckboxCardControl = withContext(Checkbox.Control, "control", { forwardAsChild: true });
const CheckboxCardContent = withContext("div", "content");
const CheckboxCardIndicator = forwardRef(function CheckboxCardIndicator2(props, ref) {
  const api = useCheckboxContext();
  const styles = useCheckboxCardStyles();
  return /* @__PURE__ */ jsx(
    Checkmark,
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
const CheckboxCardContext = Checkbox.Context;
const CheckboxCardHiddenInput = Checkbox.HiddenInput;

export { CheckboxCardAddon, CheckboxCardContent, CheckboxCardContext, CheckboxCardControl, CheckboxCardDescription, CheckboxCardHiddenInput, CheckboxCardIndicator, CheckboxCardLabel, CheckboxCardRoot, CheckboxCardRootPropsProvider, CheckboxCardRootProvider, useCheckboxCardStyles };
