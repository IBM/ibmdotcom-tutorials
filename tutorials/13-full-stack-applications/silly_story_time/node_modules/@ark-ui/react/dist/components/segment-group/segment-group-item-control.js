'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { parts } from './segment-group.anatomy.js';
import { useSegmentGroupContext } from './use-segment-group-context.js';
import { useSegmentGroupItemPropsContext } from './use-segment-group-item-props-context.js';

const SegmentGroupItemControl = forwardRef((props, ref) => {
  const segmentGroup = useSegmentGroupContext();
  const itemProps = useSegmentGroupItemPropsContext();
  const mergedProps = mergeProps(
    segmentGroup.getItemControlProps(itemProps),
    parts.itemControl.attrs,
    props
  );
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SegmentGroupItemControl.displayName = "SegmentGroupItemControl";

export { SegmentGroupItemControl };
