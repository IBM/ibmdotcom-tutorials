'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useTooltipContext = require('./use-tooltip-context.cjs');

const TooltipPositioner = react.forwardRef((props, ref) => {
  const tooltip = useTooltipContext.useTooltipContext();
  const mergedProps = react$1.mergeProps(tooltip.getPositionerProps(), props);
  const presence = usePresenceContext.usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
TooltipPositioner.displayName = "TooltipPositioner";

exports.TooltipPositioner = TooltipPositioner;
