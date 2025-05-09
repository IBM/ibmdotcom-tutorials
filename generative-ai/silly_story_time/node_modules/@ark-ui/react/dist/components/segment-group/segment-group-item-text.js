'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { parts } from './segment-group.anatomy.js';
import { useSegmentGroupContext } from './use-segment-group-context.js';
import { useSegmentGroupItemPropsContext } from './use-segment-group-item-props-context.js';

const SegmentGroupItemText = forwardRef((props, ref) => {
  const segmentGroup = useSegmentGroupContext();
  const itemProps = useSegmentGroupItemPropsContext();
  const mergedProps = mergeProps(
    segmentGroup.getItemTextProps(itemProps),
    parts.itemText.attrs,
    props
  );
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
SegmentGroupItemText.displayName = "SegmentGroupItemText";

export { SegmentGroupItemText };
