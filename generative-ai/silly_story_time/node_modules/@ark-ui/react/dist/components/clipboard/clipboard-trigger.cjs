'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useClipboardContext = require('./use-clipboard-context.cjs');

const ClipboardTrigger = react.forwardRef((props, ref) => {
  const clipboard = useClipboardContext.useClipboardContext();
  const mergedProps = react$1.mergeProps(clipboard.getTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
ClipboardTrigger.displayName = "ClipboardTrigger";

exports.ClipboardTrigger = ClipboardTrigger;
