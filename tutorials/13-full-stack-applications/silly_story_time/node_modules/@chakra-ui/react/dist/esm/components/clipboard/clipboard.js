"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Clipboard } from '@ark-ui/react/clipboard';
import { forwardRef } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { CopyIcon, CheckIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useClipboardStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "clipboard" });
const ClipboardRootProvider = withProvider(Clipboard.RootProvider, "root", { forwardAsChild: true });
const ClipboardRoot = withProvider(
  Clipboard.Root,
  "root",
  { forwardAsChild: true }
);
const ClipboardPropsProvider = PropsProvider;
const ClipboardTrigger = withContext(Clipboard.Trigger, "trigger", { forwardAsChild: true });
const ClipboardControl = withContext(Clipboard.Control, "control", { forwardAsChild: true });
const ClipboardIndicator = withContext(Clipboard.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: {
    copied: /* @__PURE__ */ jsx(CheckIcon, { boxSize: "1em" }),
    children: /* @__PURE__ */ jsx(CopyIcon, { boxSize: "1em" })
  }
});
const ClipboardInput = withContext(Clipboard.Input, "input", { forwardAsChild: true });
const ClipboardLabel = withContext(Clipboard.Label, "label", { forwardAsChild: true });
const ClipboardContext = Clipboard.Context;
const ClipboardValueText = withContext(Clipboard.ValueText, "valueText", { forwardAsChild: true });
const ClipboardCopyText = forwardRef(function ClipboardCopyText2(props, ref) {
  return /* @__PURE__ */ jsx(ClipboardIndicator, { copied: "Copied", ...props, ref, children: "Copy" });
});

export { ClipboardContext, ClipboardControl, ClipboardCopyText, ClipboardIndicator, ClipboardInput, ClipboardLabel, ClipboardPropsProvider, ClipboardRoot, ClipboardRootProvider, ClipboardTrigger, ClipboardValueText, useClipboardStyles };
