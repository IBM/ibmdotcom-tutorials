"use strict";
"use client";
import { jsx, jsxs } from 'react/jsx-runtime';
import { SegmentGroup } from '@ark-ui/react/segment-group';
import { useMemo } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { For } from '../for/for.js';

const {
  withProvider,
  withContext,
  useStyles: useSegmentGroupStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "segmentGroup" });
const SegmentGroupRootProvider = withProvider(SegmentGroup.RootProvider, "root", { forwardAsChild: true });
const SegmentGroupRoot = withProvider(SegmentGroup.Root, "root", {
  forwardAsChild: true,
  forwardProps: ["orientation"],
  defaultProps: {
    orientation: "horizontal"
  }
});
const SegmentGroupPropsProvider = PropsProvider;
const SegmentGroupItem = withContext(SegmentGroup.Item, "item", { forwardAsChild: true });
const SegmentGroupItemText = withContext(SegmentGroup.ItemText, "itemText", { forwardAsChild: true });
const SegmentGroupIndicator = withContext(SegmentGroup.Indicator, "indicator", { forwardAsChild: true });
function normalize(items) {
  return items.map((item) => {
    if (typeof item === "string") return { value: item, label: item };
    return item;
  });
}
const SegmentGroupItems = (props) => {
  const { items, ...rest } = props;
  const data = useMemo(() => normalize(items), [items]);
  return /* @__PURE__ */ jsx(For, { each: data, children: (item) => /* @__PURE__ */ jsxs(
    SegmentGroupItem,
    {
      value: item.value,
      disabled: item.disabled,
      ...rest,
      children: [
        /* @__PURE__ */ jsx(SegmentGroupItemText, { children: item.label }),
        /* @__PURE__ */ jsx(SegmentGroupItemHiddenInput, {})
      ]
    },
    item.value
  ) });
};
const SegmentGroupItemHiddenInput = SegmentGroup.ItemHiddenInput;
const SegmentGroupContext = SegmentGroup.Context;
const SegmentGroupItemContext = SegmentGroup.ItemContext;

export { SegmentGroupContext, SegmentGroupIndicator, SegmentGroupItem, SegmentGroupItemContext, SegmentGroupItemHiddenInput, SegmentGroupItemText, SegmentGroupItems, SegmentGroupPropsProvider, SegmentGroupRoot, SegmentGroupRootProvider, useSegmentGroupStyles };
