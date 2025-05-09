'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useClipboardContext = require('./use-clipboard-context.cjs');

const ClipboardRootProvider = react.forwardRef((props, ref) => {
  const [{ value: clipboard }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(clipboard.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useClipboardContext.ClipboardProvider, { value: clipboard, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ref, ...mergedProps }) });
});
ClipboardRootProvider.displayName = "ClipboardRootProvider";

exports.ClipboardRootProvider = ClipboardRootProvider;
