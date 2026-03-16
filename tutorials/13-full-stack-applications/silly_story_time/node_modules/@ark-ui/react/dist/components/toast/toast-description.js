'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useToastContext } from './use-toast-context.js';

const ToastDescription = forwardRef((props, ref) => {
  const toast = useToastContext();
  const mergedProps = mergeProps(toast.getDescriptionProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ToastDescription.displayName = "ToastDescription";

export { ToastDescription };
