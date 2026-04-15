"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { RadioGroup, useRadioGroupItemContext } from '@ark-ui/react/radio-group';
import { forwardRef } from 'react';
import { dataAttr } from '../../utils/attr.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { Radiomark } from '../radiomark/radiomark.js';

const {
  withProvider,
  withContext,
  useStyles: useRadioCardStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "radioCard" });
const RadioCardRootProvider = withProvider(RadioGroup.RootProvider, "root", { forwardAsChild: true });
const RadioCardRoot = withProvider(
  RadioGroup.Root,
  "root",
  { forwardAsChild: true }
);
const RadioCardPropsProvider = PropsProvider;
const RadioCardLabel = withContext(
  RadioGroup.Label,
  "label",
  { forwardAsChild: true }
);
const RadioCardItem = withContext(
  RadioGroup.Item,
  "item",
  { forwardAsChild: true }
);
const RadioCardItemText = withContext(RadioGroup.ItemText, "itemText", { forwardAsChild: true });
const RadioCardItemDescription = withContext("div", "itemDescription", { forwardAsChild: true });
const RadioCardItemControl = forwardRef(function RadioCardItemControl2(props, ref) {
  const api = useRadioGroupItemContext();
  const styles = useRadioCardStyles();
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      "data-focus": dataAttr(api.focused),
      "data-disabled": dataAttr(api.disabled),
      "data-state": api.checked ? "checked" : "unchecked",
      "data-hover": dataAttr(api.hovered),
      "data-active": dataAttr(api.active),
      "data-invalid": dataAttr(api.invalid),
      ...props,
      css: [styles["itemControl"], props.css]
    }
  );
});
const RadioCardItemContent = withContext("div", "itemContent");
const RadioCardItemAddon = withContext("div", "itemAddon");
const RadioCardItemIndicator = forwardRef(function RadioGroupItemIndicator(props, ref) {
  const { checked, ...rest } = props;
  const styles = useRadioCardStyles();
  const itemContext = useRadioGroupItemContext();
  if (checked && itemContext.checked) {
    return /* @__PURE__ */ jsx(
      chakra.span,
      {
        ref,
        asChild: true,
        ...rest,
        "aria-hidden": "true",
        css: [styles["itemIndicator"], props.css],
        children: checked
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Radiomark,
    {
      ref,
      unstyled: true,
      ...props,
      "aria-hidden": "true",
      checked: itemContext.checked,
      disabled: itemContext.disabled,
      css: [styles["itemIndicator"], props.css]
    }
  );
});
const RadioCardContext = RadioGroup.Context;
const RadioCardItemContext = RadioGroup.ItemContext;
const RadioCardItemHiddenInput = RadioGroup.ItemHiddenInput;

export { RadioCardContext, RadioCardItem, RadioCardItemAddon, RadioCardItemContent, RadioCardItemContext, RadioCardItemControl, RadioCardItemDescription, RadioCardItemHiddenInput, RadioCardItemIndicator, RadioCardItemText, RadioCardLabel, RadioCardPropsProvider, RadioCardRoot, RadioCardRootProvider, useRadioCardStyles };
