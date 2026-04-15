'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSegmentGroupContext } from './use-segment-group-context.js';
import { useSegmentGroupItemPropsContext } from './use-segment-group-item-props-context.js';

const SegmentGroupItemHiddenInput = forwardRef(
  (props, ref) => {
    const segmentGroup = useSegmentGroupContext();
    const itemProps = useSegmentGroupItemPropsContext();
    const mergedProps = mergeProps(segmentGroup.getItemHiddenInputProps(itemProps), props);
    return /* @__PURE__ */ jsx(ark.input, { ...mergedProps, ref });
  }
);
SegmentGroupItemHiddenInput.displayName = "SegmentGroupItemHiddenInput";

export { SegmentGroupItemHiddenInput };
