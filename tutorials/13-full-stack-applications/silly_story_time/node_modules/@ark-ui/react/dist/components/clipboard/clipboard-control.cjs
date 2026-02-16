'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useClipboardContext = require('./use-clipboard-context.cjs');

const ClipboardControl = react.forwardRef((props, ref) => {
  const clipboard = useClipboardContext.useClipboardContext();
  const mergedProps = react$1.mergeProps(clipboard.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
ClipboardControl.displayName = "ClipboardControl";

exports.ClipboardControl = ClipboardControl;
