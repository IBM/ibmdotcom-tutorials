'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useHoverCardContext = require('./use-hover-card-context.cjs');

const HoverCardContent = react.forwardRef((props, ref) => {
  const hoverCard = useHoverCardContext.useHoverCardContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(hoverCard.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref) });
});
HoverCardContent.displayName = "HoverCardContent";

exports.HoverCardContent = HoverCardContent;
