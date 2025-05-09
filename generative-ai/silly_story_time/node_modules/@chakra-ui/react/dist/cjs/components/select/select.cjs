"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var select = require('@ark-ui/react/select');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useSelectStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "select" });
const SelectRootProvider = withProvider(select.Select.RootProvider, "root", {
  forwardAsChild: true
});
const SelectRoot = withProvider(
  select.Select.Root,
  "root",
  {
    forwardAsChild: true,
    defaultProps: { positioning: { sameWidth: true } }
  }
);
const SelectPropsProvider = PropsProvider;
const SelectTrigger = withContext(
  select.Select.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const SelectPositioner = withContext(select.Select.Positioner, "positioner", { forwardAsChild: true });
const SelectContent = withContext(
  select.Select.Content,
  "content",
  { forwardAsChild: true }
);
const SelectValueText = withContext(select.Select.ValueText, "valueText", { forwardAsChild: true });
const SelectClearTrigger = withContext(select.Select.ClearTrigger, "clearTrigger", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(icons.CloseIcon, { boxSize: "1em" }) }
});
const SelectItemGroup = withContext(select.Select.ItemGroup, "itemGroup", { forwardAsChild: true });
const SelectItemGroupLabel = withContext(select.Select.ItemGroupLabel, "itemGroupLabel", { forwardAsChild: true });
const SelectItem = withContext(
  select.Select.Item,
  "item",
  { forwardAsChild: true }
);
const SelectItemText = withContext(
  select.Select.ItemText,
  "itemText",
  { forwardAsChild: true }
);
const SelectItemIndicator = withContext(select.Select.ItemIndicator, "itemIndicator", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.CheckIcon, {})
  }
});
const SelectIndicatorGroup = withContext("div", "indicatorGroup");
const SelectIndicator = withContext(select.Select.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronDownIcon, {})
  }
});
const SelectControl = withContext(
  select.Select.Control,
  "control",
  { forwardAsChild: true }
);
const SelectLabel = withContext(
  select.Select.Label,
  "label",
  { forwardAsChild: true }
);
const SelectContext = select.Select.Context;
const SelectHiddenSelect = select.Select.HiddenSelect;
const SelectItemContext = select.Select.ItemContext;

exports.SelectClearTrigger = SelectClearTrigger;
exports.SelectContent = SelectContent;
exports.SelectContext = SelectContext;
exports.SelectControl = SelectControl;
exports.SelectHiddenSelect = SelectHiddenSelect;
exports.SelectIndicator = SelectIndicator;
exports.SelectIndicatorGroup = SelectIndicatorGroup;
exports.SelectItem = SelectItem;
exports.SelectItemContext = SelectItemContext;
exports.SelectItemGroup = SelectItemGroup;
exports.SelectItemGroupLabel = SelectItemGroupLabel;
exports.SelectItemIndicator = SelectItemIndicator;
exports.SelectItemText = SelectItemText;
exports.SelectLabel = SelectLabel;
exports.SelectPositioner = SelectPositioner;
exports.SelectPropsProvider = SelectPropsProvider;
exports.SelectRoot = SelectRoot;
exports.SelectRootProvider = SelectRootProvider;
exports.SelectTrigger = SelectTrigger;
exports.SelectValueText = SelectValueText;
exports.useSelectStyles = useSelectStyles;
