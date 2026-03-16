'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useFloatingPanelContext = require('./use-floating-panel-context.cjs');

const FloatingPanelPositioner = react.forwardRef((props, ref) => {
  const floatingPanel = useFloatingPanelContext.useFloatingPanelContext();
  const mergedProps = react$1.mergeProps(floatingPanel.getPositionerProps(), props);
  const presence = usePresenceContext.usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
FloatingPanelPositioner.displayName = "FloatingPanelPositioner";

exports.FloatingPanelPositioner = FloatingPanelPositioner;
