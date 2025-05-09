"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var segmentGroup = require('@ark-ui/react/segment-group');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var _for = require('../for/for.cjs');

const {
  withProvider,
  withContext,
  useStyles: useSegmentGroupStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "segmentGroup" });
const SegmentGroupRootProvider = withProvider(segmentGroup.SegmentGroup.RootProvider, "root", { forwardAsChild: true });
const SegmentGroupRoot = withProvider(segmentGroup.SegmentGroup.Root, "root", {
  forwardAsChild: true,
  forwardProps: ["orientation"],
  defaultProps: {
    orientation: "horizontal"
  }
});
const SegmentGroupPropsProvider = PropsProvider;
const SegmentGroupItem = withContext(segmentGroup.SegmentGroup.Item, "item", { forwardAsChild: true });
const SegmentGroupItemText = withContext(segmentGroup.SegmentGroup.ItemText, "itemText", { forwardAsChild: true });
const SegmentGroupIndicator = withContext(segmentGroup.SegmentGroup.Indicator, "indicator", { forwardAsChild: true });
function normalize(items) {
  return items.map((item) => {
    if (typeof item === "string") return { value: item, label: item };
    return item;
  });
}
const SegmentGroupItems = (props) => {
  const { items, ...rest } = props;
  const data = React.useMemo(() => normalize(items), [items]);
  return /* @__PURE__ */ jsxRuntime.jsx(_for.For, { each: data, children: (item) => /* @__PURE__ */ jsxRuntime.jsxs(
    SegmentGroupItem,
    {
      value: item.value,
      disabled: item.disabled,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SegmentGroupItemText, { children: item.label }),
        /* @__PURE__ */ jsxRuntime.jsx(SegmentGroupItemHiddenInput, {})
      ]
    },
    item.value
  ) });
};
const SegmentGroupItemHiddenInput = segmentGroup.SegmentGroup.ItemHiddenInput;
const SegmentGroupContext = segmentGroup.SegmentGroup.Context;
const SegmentGroupItemContext = segmentGroup.SegmentGroup.ItemContext;

exports.SegmentGroupContext = SegmentGroupContext;
exports.SegmentGroupIndicator = SegmentGroupIndicator;
exports.SegmentGroupItem = SegmentGroupItem;
exports.SegmentGroupItemContext = SegmentGroupItemContext;
exports.SegmentGroupItemHiddenInput = SegmentGroupItemHiddenInput;
exports.SegmentGroupItemText = SegmentGroupItemText;
exports.SegmentGroupItems = SegmentGroupItems;
exports.SegmentGroupPropsProvider = SegmentGroupPropsProvider;
exports.SegmentGroupRoot = SegmentGroupRoot;
exports.SegmentGroupRootProvider = SegmentGroupRootProvider;
exports.useSegmentGroupStyles = useSegmentGroupStyles;
