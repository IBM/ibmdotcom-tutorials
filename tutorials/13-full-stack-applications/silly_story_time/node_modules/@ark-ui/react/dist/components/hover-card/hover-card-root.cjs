'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useHoverCard = require('./use-hover-card.cjs');
const useHoverCardContext = require('./use-hover-card-context.cjs');

const HoverCardRoot = (props) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps.splitPresenceProps(props);
  const hoverCard = useHoverCard.useHoverCard(localProps);
  const presence = usePresence.usePresence(react.mergeProps({ present: hoverCard.open }, presenceProps));
  return /* @__PURE__ */ jsxRuntime.jsx(useHoverCardContext.HoverCardProvider, { value: hoverCard, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children }) });
};

exports.HoverCardRoot = HoverCardRoot;
