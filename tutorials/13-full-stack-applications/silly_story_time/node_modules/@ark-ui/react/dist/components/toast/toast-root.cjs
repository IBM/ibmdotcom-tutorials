'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const useToastContext = require('./use-toast-context.cjs');

const ToastRoot = react.forwardRef((props, ref) => {
  const toast = useToastContext.useToastContext();
  const mergedProps = react$1.mergeProps(toast.getRootProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ...mergedProps, ref, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { ...toast.getGhostBeforeProps() }),
    props.children,
    /* @__PURE__ */ jsxRuntime.jsx("div", { ...toast.getGhostAfterProps() })
  ] });
});
ToastRoot.displayName = "ToastRoot";

exports.ToastRoot = ToastRoot;
