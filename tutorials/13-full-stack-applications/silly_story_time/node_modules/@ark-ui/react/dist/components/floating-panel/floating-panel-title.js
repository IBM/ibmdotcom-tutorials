'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFloatingPanelContext } from './use-floating-panel-context.js';

const FloatingPanelTitle = forwardRef((props, ref) => {
  const floatingPanel = useFloatingPanelContext();
  const mergedProps = mergeProps(floatingPanel.getTitleProps(), props);
  return /* @__PURE__ */ jsx(ark.h2, { ...mergedProps, ref });
});
FloatingPanelTitle.displayName = "FloatingPanelTitle";

export { FloatingPanelTitle };
