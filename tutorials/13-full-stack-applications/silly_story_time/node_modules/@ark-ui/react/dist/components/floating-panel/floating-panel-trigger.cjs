'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useFloatingPanelContext = require('./use-floating-panel-context.cjs');

const FloatingPanelTrigger = react.forwardRef((props, ref) => {
  const floatingPanel = useFloatingPanelContext.useFloatingPanelContext();
  const presence = usePresenceContext.usePresenceContext();
  const triggerProps = floatingPanel.getTriggerProps();
  const mergedProps = react$1.mergeProps(
    {
      ...triggerProps,
      "aria-controls": presence.unmounted ? void 0 : triggerProps["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
FloatingPanelTrigger.displayName = "FloatingPanelTrigger";

exports.FloatingPanelTrigger = FloatingPanelTrigger;
