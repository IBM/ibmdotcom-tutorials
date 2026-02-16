'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDialogContext } from './use-dialog-context.js';

const DialogTitle = forwardRef((props, ref) => {
  const dialog = useDialogContext();
  const mergedProps = mergeProps(dialog.getTitleProps(), props);
  return /* @__PURE__ */ jsx(ark.h2, { ...mergedProps, ref });
});
DialogTitle.displayName = "DialogTitle";

export { DialogTitle };
