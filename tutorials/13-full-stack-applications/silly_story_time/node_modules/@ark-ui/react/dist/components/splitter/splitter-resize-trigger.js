'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSplitterContext } from './use-splitter-context.js';

const SplitterResizeTrigger = forwardRef((props, ref) => {
  const [triggerProps, localProps] = createSplitProps()(props, ["disabled", "id"]);
  const splitter = useSplitterContext();
  const mergedProps = mergeProps(splitter.getResizeTriggerProps(triggerProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ref, ...mergedProps });
});
SplitterResizeTrigger.displayName = "SplitterResizeTrigger";

export { SplitterResizeTrigger };
