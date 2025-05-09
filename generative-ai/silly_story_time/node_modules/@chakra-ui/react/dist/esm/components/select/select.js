"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Select } from '@ark-ui/react/select';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { CloseIcon, CheckIcon, ChevronDownIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useSelectStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "select" });
const SelectRootProvider = withProvider(Select.RootProvider, "root", {
  forwardAsChild: true
});
const SelectRoot = withProvider(
  Select.Root,
  "root",
  {
    forwardAsChild: true,
    defaultProps: { positioning: { sameWidth: true } }
  }
);
const SelectPropsProvider = PropsProvider;
const SelectTrigger = withContext(
  Select.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const SelectPositioner = withContext(Select.Positioner, "positioner", { forwardAsChild: true });
const SelectContent = withContext(
  Select.Content,
  "content",
  { forwardAsChild: true }
);
const SelectValueText = withContext(Select.ValueText, "valueText", { forwardAsChild: true });
const SelectClearTrigger = withContext(Select.ClearTrigger, "clearTrigger", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsx(CloseIcon, { boxSize: "1em" }) }
});
const SelectItemGroup = withContext(Select.ItemGroup, "itemGroup", { forwardAsChild: true });
const SelectItemGroupLabel = withContext(Select.ItemGroupLabel, "itemGroupLabel", { forwardAsChild: true });
const SelectItem = withContext(
  Select.Item,
  "item",
  { forwardAsChild: true }
);
const SelectItemText = withContext(
  Select.ItemText,
  "itemText",
  { forwardAsChild: true }
);
const SelectItemIndicator = withContext(Select.ItemIndicator, "itemIndicator", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsx(CheckIcon, {})
  }
});
const SelectIndicatorGroup = withContext("div", "indicatorGroup");
const SelectIndicator = withContext(Select.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsx(ChevronDownIcon, {})
  }
});
const SelectControl = withContext(
  Select.Control,
  "control",
  { forwardAsChild: true }
);
const SelectLabel = withContext(
  Select.Label,
  "label",
  { forwardAsChild: true }
);
const SelectContext = Select.Context;
const SelectHiddenSelect = Select.HiddenSelect;
const SelectItemContext = Select.ItemContext;

export { SelectClearTrigger, SelectContent, SelectContext, SelectControl, SelectHiddenSelect, SelectIndicator, SelectIndicatorGroup, SelectItem, SelectItemContext, SelectItemGroup, SelectItemGroupLabel, SelectItemIndicator, SelectItemText, SelectLabel, SelectPositioner, SelectPropsProvider, SelectRoot, SelectRootProvider, SelectTrigger, SelectValueText, useSelectStyles };
