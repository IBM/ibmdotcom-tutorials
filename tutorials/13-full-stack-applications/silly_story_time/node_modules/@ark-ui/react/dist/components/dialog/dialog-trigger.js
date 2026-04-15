'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useDialogContext } from './use-dialog-context.js';

const DialogTrigger = forwardRef((props, ref) => {
  const dialog = useDialogContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(
    {
      ...dialog.getTriggerProps(),
      "aria-controls": presence.unmounted ? void 0 : dialog.getTriggerProps()["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
DialogTrigger.displayName = "DialogTrigger";

export { DialogTrigger };
