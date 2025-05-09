'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useComboboxContext } from './use-combobox-context.js';

const ComboboxPositioner = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(combobox.getPositionerProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ComboboxPositioner.displayName = "ComboboxPositioner";

export { ComboboxPositioner };
