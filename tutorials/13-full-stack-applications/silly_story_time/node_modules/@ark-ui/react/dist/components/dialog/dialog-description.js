'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDialogContext } from './use-dialog-context.js';

const DialogDescription = forwardRef((props, ref) => {
  const dialog = useDialogContext();
  const mergedProps = mergeProps(dialog.getDescriptionProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
DialogDescription.displayName = "DialogDescription";

export { DialogDescription };
