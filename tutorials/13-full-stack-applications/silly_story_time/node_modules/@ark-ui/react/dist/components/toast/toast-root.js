'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { useToastContext } from './use-toast-context.js';

const ToastRoot = forwardRef((props, ref) => {
  const toast = useToastContext();
  const mergedProps = mergeProps(toast.getRootProps(), props);
  return /* @__PURE__ */ jsxs("div", { ...mergedProps, ref, children: [
    /* @__PURE__ */ jsx("div", { ...toast.getGhostBeforeProps() }),
    props.children,
    /* @__PURE__ */ jsx("div", { ...toast.getGhostAfterProps() })
  ] });
});
ToastRoot.displayName = "ToastRoot";

export { ToastRoot };
