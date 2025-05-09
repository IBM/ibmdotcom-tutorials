'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useDialogContext } from './use-dialog-context.js';

const DialogPositioner = forwardRef((props, ref) => {
  const dialog = useDialogContext();
  const mergedProps = mergeProps(dialog.getPositionerProps(), props);
  const presence = usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
DialogPositioner.displayName = "DialogPositioner";

export { DialogPositioner };
