'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { parts } from './segment-group.anatomy.js';
import { useSegmentGroupContext } from './use-segment-group-context.js';

const SegmentGroupIndicator = forwardRef((props, ref) => {
  const segmentGroup = useSegmentGroupContext();
  const mergedProps = mergeProps(
    segmentGroup.getIndicatorProps(),
    parts.indicator.attrs,
    props
  );
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SegmentGroupIndicator.displayName = "SegmentGroupIndicator";

export { SegmentGroupIndicator };
