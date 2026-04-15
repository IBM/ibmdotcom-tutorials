'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useHoverCardContext } from './use-hover-card-context.js';

const HoverCardArrow = forwardRef((props, ref) => {
  const hoverCard = useHoverCardContext();
  const mergedProps = mergeProps(hoverCard.getArrowProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
HoverCardArrow.displayName = "HoverCardArrow";

export { HoverCardArrow };
