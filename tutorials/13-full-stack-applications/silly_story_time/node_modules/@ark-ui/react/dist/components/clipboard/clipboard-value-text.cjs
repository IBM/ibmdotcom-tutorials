'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const factory = require('../factory.cjs');
const useClipboardContext = require('./use-clipboard-context.cjs');

const ClipboardValueText = react.forwardRef((props, ref) => {
  const clipboard = useClipboardContext.useClipboardContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...props, ref, children: props.children || clipboard.value });
});
ClipboardValueText.displayName = "ClipboardValueText";

exports.ClipboardValueText = ClipboardValueText;
