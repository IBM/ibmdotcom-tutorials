'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useSelectContext } from './use-select-context.js';

const SelectContent = forwardRef((props, ref) => {
  const select = useSelectContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(select.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref) });
});
SelectContent.displayName = "SelectContent";

export { SelectContent };
