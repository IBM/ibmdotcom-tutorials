'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const segmentGroup_anatomy = require('./segment-group.anatomy.cjs');
const useSegmentGroupContext = require('./use-segment-group-context.cjs');
const useSegmentGroupItemContext = require('./use-segment-group-item-context.cjs');
const useSegmentGroupItemPropsContext = require('./use-segment-group-item-props-context.cjs');

const SegmentGroupItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["value", "disabled", "invalid"]);
  const segmentGroup = useSegmentGroupContext.useSegmentGroupContext();
  const mergedProps = react$1.mergeProps(
    segmentGroup.getItemProps(itemProps),
    segmentGroup_anatomy.parts.item.attrs,
    localProps
  );
  const itemState = segmentGroup.getItemState(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSegmentGroupItemPropsContext.SegmentGroupItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useSegmentGroupItemContext.SegmentGroupItemProvider, { value: itemState, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref }) }) });
});
SegmentGroupItem.displayName = "SegmentGroupItem";

exports.SegmentGroupItem = SegmentGroupItem;
