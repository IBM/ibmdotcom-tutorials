"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var clipboard = require('@ark-ui/react/clipboard');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useClipboardStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "clipboard" });
const ClipboardRootProvider = withProvider(clipboard.Clipboard.RootProvider, "root", { forwardAsChild: true });
const ClipboardRoot = withProvider(
  clipboard.Clipboard.Root,
  "root",
  { forwardAsChild: true }
);
const ClipboardPropsProvider = PropsProvider;
const ClipboardTrigger = withContext(clipboard.Clipboard.Trigger, "trigger", { forwardAsChild: true });
const ClipboardControl = withContext(clipboard.Clipboard.Control, "control", { forwardAsChild: true });
const ClipboardIndicator = withContext(clipboard.Clipboard.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: {
    copied: /* @__PURE__ */ jsxRuntime.jsx(icons.CheckIcon, { boxSize: "1em" }),
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.CopyIcon, { boxSize: "1em" })
  }
});
const ClipboardInput = withContext(clipboard.Clipboard.Input, "input", { forwardAsChild: true });
const ClipboardLabel = withContext(clipboard.Clipboard.Label, "label", { forwardAsChild: true });
const ClipboardContext = clipboard.Clipboard.Context;
const ClipboardValueText = withContext(clipboard.Clipboard.ValueText, "valueText", { forwardAsChild: true });
const ClipboardCopyText = React.forwardRef(function ClipboardCopyText2(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(ClipboardIndicator, { copied: "Copied", ...props, ref, children: "Copy" });
});

exports.ClipboardContext = ClipboardContext;
exports.ClipboardControl = ClipboardControl;
exports.ClipboardCopyText = ClipboardCopyText;
exports.ClipboardIndicator = ClipboardIndicator;
exports.ClipboardInput = ClipboardInput;
exports.ClipboardLabel = ClipboardLabel;
exports.ClipboardPropsProvider = ClipboardPropsProvider;
exports.ClipboardRoot = ClipboardRoot;
exports.ClipboardRootProvider = ClipboardRootProvider;
exports.ClipboardTrigger = ClipboardTrigger;
exports.ClipboardValueText = ClipboardValueText;
exports.useClipboardStyles = useClipboardStyles;
