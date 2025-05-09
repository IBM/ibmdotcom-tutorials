'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useSelectContext } from './use-select-context.js';

const SelectPositioner = forwardRef((props, ref) => {
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getPositionerProps(), props);
  const presence = usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SelectPositioner.displayName = "SelectPositioner";

export { SelectPositioner };
