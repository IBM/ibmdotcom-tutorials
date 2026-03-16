'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useHoverCardContext } from './use-hover-card-context.js';

const HoverCardTrigger = forwardRef((props, ref) => {
  const hoverCard = useHoverCardContext();
  const mergedProps = mergeProps(hoverCard.getTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
HoverCardTrigger.displayName = "HoverCardTrigger";

export { HoverCardTrigger };
