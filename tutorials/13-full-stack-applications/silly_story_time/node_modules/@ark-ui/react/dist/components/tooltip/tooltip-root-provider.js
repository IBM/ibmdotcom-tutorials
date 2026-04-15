'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { TooltipProvider } from './use-tooltip-context.js';

const TooltipRootProvider = (props) => {
  const [presenceProps, { value: tooltip, children }] = splitPresenceProps(props);
  const presence = usePresence(mergeProps({ present: tooltip.open }, presenceProps));
  return /* @__PURE__ */ jsx(TooltipProvider, { value: tooltip, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children }) });
};

export { TooltipRootProvider };
