'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useClipboardContext = require('./use-clipboard-context.cjs');

const ClipboardIndicator = react.forwardRef((props, ref) => {
  const { children, copied, ...localProps } = props;
  const clipboard = useClipboardContext.useClipboardContext();
  const mergedProps = react$1.mergeProps(clipboard.getIndicatorProps({ copied: clipboard.copied }), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref, children: clipboard.copied ? copied : children });
});
ClipboardIndicator.displayName = "ClipboardIndicator";

exports.ClipboardIndicator = ClipboardIndicator;
