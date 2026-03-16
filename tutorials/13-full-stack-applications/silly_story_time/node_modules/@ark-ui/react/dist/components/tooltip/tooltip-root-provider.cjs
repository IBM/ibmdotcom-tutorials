'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useTooltipContext = require('./use-tooltip-context.cjs');

const TooltipRootProvider = (props) => {
  const [presenceProps, { value: tooltip, children }] = splitPresenceProps.splitPresenceProps(props);
  const presence = usePresence.usePresence(react.mergeProps({ present: tooltip.open }, presenceProps));
  return /* @__PURE__ */ jsxRuntime.jsx(useTooltipContext.TooltipProvider, { value: tooltip, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children }) });
};

exports.TooltipRootProvider = TooltipRootProvider;
