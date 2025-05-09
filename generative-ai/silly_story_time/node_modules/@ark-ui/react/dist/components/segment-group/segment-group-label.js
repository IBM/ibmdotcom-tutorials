'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { parts } from './segment-group.anatomy.js';
import { useSegmentGroupContext } from './use-segment-group-context.js';

const SegmentGroupLabel = forwardRef((props, ref) => {
  const segmentGroup = useSegmentGroupContext();
  const mergedProps = mergeProps(segmentGroup.getLabelProps(), parts.label.attrs, props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
SegmentGroupLabel.displayName = "SegmentGroupLabel";

export { SegmentGroupLabel };
