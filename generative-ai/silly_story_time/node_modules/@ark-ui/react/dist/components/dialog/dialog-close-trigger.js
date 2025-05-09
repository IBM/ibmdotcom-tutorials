'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDialogContext } from './use-dialog-context.js';

const DialogCloseTrigger = forwardRef((props, ref) => {
  const dialog = useDialogContext();
  const mergedProps = mergeProps(dialog.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
DialogCloseTrigger.displayName = "DialogCloseTrigger";

export { DialogCloseTrigger };
