'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSplitterContext } from './use-splitter-context.js';

const SplitterPanel = forwardRef((props, ref) => {
  const [splitterPanelProps, localProps] = createSplitProps()(props, ["id"]);
  const splitter = useSplitterContext();
  const mergedProps = mergeProps(splitter.getPanelProps(splitterPanelProps), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SplitterPanel.displayName = "SplitterPanel";

export { SplitterPanel };
