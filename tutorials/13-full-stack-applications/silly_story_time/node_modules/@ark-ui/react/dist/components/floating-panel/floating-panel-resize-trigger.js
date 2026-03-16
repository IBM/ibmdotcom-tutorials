'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useFloatingPanelContext } from './use-floating-panel-context.js';

const FloatingPanelResizeTrigger = forwardRef((props, ref) => {
  const [resizeProps, localProps] = createSplitProps()(props, ["axis"]);
  const floatingPanel = useFloatingPanelContext();
  const mergedProps = mergeProps(floatingPanel.getResizeTriggerProps(resizeProps), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
FloatingPanelResizeTrigger.displayName = "FloatingPanelResizeTrigger";

export { FloatingPanelResizeTrigger };
