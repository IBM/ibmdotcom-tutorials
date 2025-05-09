'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFloatingPanelContext } from './use-floating-panel-context.js';

const FloatingPanelHeader = forwardRef((props, ref) => {
  const floatingPanel = useFloatingPanelContext();
  const mergedProps = mergeProps(floatingPanel.getHeaderProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
FloatingPanelHeader.displayName = "FloatingPanelHeader";

export { FloatingPanelHeader };
