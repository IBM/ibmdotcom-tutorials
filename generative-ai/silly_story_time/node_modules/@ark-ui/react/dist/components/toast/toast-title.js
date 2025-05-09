'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useToastContext } from './use-toast-context.js';

const ToastTitle = forwardRef((props, ref) => {
  const toast = useToastContext();
  const mergedProps = mergeProps(toast.getTitleProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ToastTitle.displayName = "ToastTitle";

export { ToastTitle };
