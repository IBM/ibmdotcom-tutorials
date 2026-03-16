'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useHoverCardContext } from './use-hover-card-context.js';

const HoverCardPositioner = forwardRef((props, ref) => {
  const hoverCard = useHoverCardContext();
  const mergedProps = mergeProps(hoverCard.getPositionerProps(), props);
  const presence = usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
HoverCardPositioner.displayName = "HoverCardPositioner";

export { HoverCardPositioner };
