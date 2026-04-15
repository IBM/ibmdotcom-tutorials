'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useFloatingPanel = require('./use-floating-panel.cjs');
const useFloatingPanelContext = require('./use-floating-panel-context.cjs');

const FloatingPanelRoot = (props) => {
  const [presenceProps, otherProps] = splitPresenceProps.splitPresenceProps(props);
  const [useFloatingPanelProps, localProps] = createSplitProps.createSplitProps()(otherProps, [
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
  const floatingPanel = useFloatingPanel.useFloatingPanel(useFloatingPanelProps);
  const usePresenceProps = react.mergeProps({ present: floatingPanel.open }, presenceProps);
  const presence = usePresence.usePresence(usePresenceProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useFloatingPanelContext.FloatingPanelProvider, { value: floatingPanel, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: localProps.children }) });
};

exports.FloatingPanelRoot = FloatingPanelRoot;
