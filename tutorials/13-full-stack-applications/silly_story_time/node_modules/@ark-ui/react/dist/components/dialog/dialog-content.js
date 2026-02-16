'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useDialogContext } from './use-dialog-context.js';

const DialogContent = forwardRef((props, ref) => {
  const dialog = useDialogContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(dialog.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref) });
});
DialogContent.displayName = "DialogContent";

export { DialogContent };
