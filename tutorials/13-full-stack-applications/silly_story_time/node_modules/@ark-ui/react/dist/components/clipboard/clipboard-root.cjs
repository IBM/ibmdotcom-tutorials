'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useClipboard = require('./use-clipboard.cjs');
const useClipboardContext = require('./use-clipboard-context.cjs');

const ClipboardRoot = react.forwardRef((props, ref) => {
  const [useClipboardProps, localProps] = createSplitProps.createSplitProps()(props, [
    "defaultValue",
    "id",
    "ids",
    "onStatusChange",
    "onValueChange",
    "timeout",
    "value"
  ]);
  const clipboard = useClipboard.useClipboard(useClipboardProps);
  const mergedProps = react$1.mergeProps(clipboard.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useClipboardContext.ClipboardProvider, { value: clipboard, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ref, ...mergedProps }) });
});
ClipboardRoot.displayName = "ClipboardRoot";

exports.ClipboardRoot = ClipboardRoot;
