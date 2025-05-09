'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { usePopover } from './use-popover.js';
import { PopoverProvider } from './use-popover-context.js';

const PopoverRoot = (props) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps(props);
  const popover = usePopover(localProps);
  const presence = usePresence(mergeProps({ present: popover.open }, presenceProps));
  return /* @__PURE__ */ jsx(PopoverProvider, { value: popover, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children }) });
};

export { PopoverRoot };
