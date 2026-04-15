'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const usePopover = require('./use-popover.cjs');
const usePopoverContext = require('./use-popover-context.cjs');

const PopoverRoot = (props) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps.splitPresenceProps(props);
  const popover = usePopover.usePopover(localProps);
  const presence = usePresence.usePresence(react.mergeProps({ present: popover.open }, presenceProps));
  return /* @__PURE__ */ jsxRuntime.jsx(usePopoverContext.PopoverProvider, { value: popover, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children }) });
};

exports.PopoverRoot = PopoverRoot;
