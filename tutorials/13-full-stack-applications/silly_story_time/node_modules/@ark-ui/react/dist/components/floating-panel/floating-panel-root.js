'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { useFloatingPanel } from './use-floating-panel.js';
import { FloatingPanelProvider } from './use-floating-panel-context.js';

const FloatingPanelRoot = (props) => {
  const [presenceProps, otherProps] = splitPresenceProps(props);
  const [useFloatingPanelProps, localProps] = createSplitProps()(otherProps, [
    "allowOverflow",
    "closeOnEscape",
    "defaultOpen",
    "defaultPosition",
    "defaultSize",
    "dir",
    "disabled",
    "draggable",
    "getAnchorPosition",
    "getBoundaryEl",
    "gridSize",
    "id",
    "ids",
    "lockAspectRatio",
    "maxSize",
    "minSize",
    "onOpenChange",
    "onPositionChange",
    "onPositionChangeEnd",
    "onSizeChange",
    "onSizeChangeEnd",
    "onStageChange",
    "open",
    "persistRect",
    "position",
    "resizable",
    "size",
    "strategy",
    "translations"
  ]);
  const floatingPanel = useFloatingPanel(useFloatingPanelProps);
  const usePresenceProps = mergeProps({ present: floatingPanel.open }, presenceProps);
  const presence = usePresence(usePresenceProps);
  return /* @__PURE__ */ jsx(FloatingPanelProvider, { value: floatingPanel, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children: localProps.children }) });
};

export { FloatingPanelRoot };
