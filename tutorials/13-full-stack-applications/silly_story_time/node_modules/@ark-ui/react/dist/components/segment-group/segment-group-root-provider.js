'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { parts } from './segment-group.anatomy.js';
import { SegmentGroupProvider } from './use-segment-group-context.js';

const SegmentGroupRootProvider = forwardRef((props, ref) => {
  const [{ value: segmentGroup }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(segmentGroup.getRootProps(), parts.root.attrs, localProps);
  return /* @__PURE__ */ jsx(SegmentGroupProvider, { value: segmentGroup, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SegmentGroupRootProvider.displayName = "SegmentGroupRootProvider";

export { SegmentGroupRootProvider };
