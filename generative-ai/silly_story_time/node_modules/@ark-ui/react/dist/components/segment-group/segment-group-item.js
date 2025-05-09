'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { parts } from './segment-group.anatomy.js';
import { useSegmentGroupContext } from './use-segment-group-context.js';
import { SegmentGroupItemProvider } from './use-segment-group-item-context.js';
import { SegmentGroupItemPropsProvider } from './use-segment-group-item-props-context.js';

const SegmentGroupItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["value", "disabled", "invalid"]);
  const segmentGroup = useSegmentGroupContext();
  const mergedProps = mergeProps(
    segmentGroup.getItemProps(itemProps),
    parts.item.attrs,
    localProps
  );
  const itemState = segmentGroup.getItemState(itemProps);
  return /* @__PURE__ */ jsx(SegmentGroupItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(SegmentGroupItemProvider, { value: itemState, children: /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref }) }) });
});
SegmentGroupItem.displayName = "SegmentGroupItem";

export { SegmentGroupItem };
