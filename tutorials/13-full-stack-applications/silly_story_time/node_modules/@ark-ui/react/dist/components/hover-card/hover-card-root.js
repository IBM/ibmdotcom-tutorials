'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { useHoverCard } from './use-hover-card.js';
import { HoverCardProvider } from './use-hover-card-context.js';

const HoverCardRoot = (props) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps(props);
  const hoverCard = useHoverCard(localProps);
  const presence = usePresence(mergeProps({ present: hoverCard.open }, presenceProps));
  return /* @__PURE__ */ jsx(HoverCardProvider, { value: hoverCard, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children }) });
};

export { HoverCardRoot };
