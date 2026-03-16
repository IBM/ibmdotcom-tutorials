'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useToastContext } from './use-toast-context.js';

const ToastActionTrigger = forwardRef((props, ref) => {
  const toast = useToastContext();
  const mergedProps = mergeProps(toast.getActionTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
ToastActionTrigger.displayName = "ToastActionTrigger";

export { ToastActionTrigger };
