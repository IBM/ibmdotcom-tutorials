'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { parts } from './segment-group.anatomy.js';
import { useSegmentGroup } from './use-segment-group.js';
import { SegmentGroupProvider } from './use-segment-group-context.js';

const SegmentGroupRoot = forwardRef((props, ref) => {
  const [useSegmentGroupProps, localProps] = createSplitProps()(props, [
    "defaultValue",
    "disabled",
    "form",
    "id",
    "ids",
    "name",
    "onValueChange",
    "orientation",
    "readOnly",
    "value"
  ]);
  const segmentGroup = useSegmentGroup(useSegmentGroupProps);
  const mergedProps = mergeProps(segmentGroup.getRootProps(), parts.root.attrs, localProps);
  return /* @__PURE__ */ jsx(SegmentGroupProvider, { value: segmentGroup, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SegmentGroupRoot.displayName = "SegmentGroupRoot";

export { SegmentGroupRoot };
