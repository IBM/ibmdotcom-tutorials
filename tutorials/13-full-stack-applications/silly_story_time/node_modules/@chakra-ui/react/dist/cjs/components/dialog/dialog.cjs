"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var dialog = require('@ark-ui/react/dialog');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');

const {
  withRootProvider,
  withContext,
  useStyles: useDialogStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "dialog" });
const DialogRootProvider = withRootProvider(
  dialog.Dialog.RootProvider,
  {
    defaultProps: { unmountOnExit: true, lazyMount: true }
  }
);
const DialogRoot = withRootProvider(dialog.Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
const DialogPropsProvider = PropsProvider;
const DialogTrigger = withContext(
  dialog.Dialog.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const DialogPositioner = withContext(dialog.Dialog.Positioner, "positioner", { forwardAsChild: true });
const DialogContent = withContext(
  dialog.Dialog.Content,
  "content",
  { forwardAsChild: true }
);
const DialogDescription = withContext(dialog.Dialog.Description, "description", { forwardAsChild: true });
const DialogTitle = withContext(
  dialog.Dialog.Title,
  "title",
  { forwardAsChild: true }
);
const DialogCloseTrigger = withContext(dialog.Dialog.CloseTrigger, "closeTrigger", { forwardAsChild: true });
const DialogActionTrigger = React.forwardRef(function DialogActionTrigger2(props, ref) {
  const dialog$1 = dialog.useDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.button, { ...props, ref, onClick: () => dialog$1.setOpen(false) });
});
const DialogBackdrop = withContext(
  dialog.Dialog.Backdrop,
  "backdrop",
  { forwardAsChild: true }
);
const DialogBody = withContext(
  "div",
  "body"
);
const DialogFooter = withContext(
  "div",
  "footer"
);
const DialogHeader = withContext(
  "div",
  "header"
);
const DialogContext = dialog.Dialog.Context;

exports.DialogActionTrigger = DialogActionTrigger;
exports.DialogBackdrop = DialogBackdrop;
exports.DialogBody = DialogBody;
exports.DialogCloseTrigger = DialogCloseTrigger;
exports.DialogContent = DialogContent;
exports.DialogContext = DialogContext;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogPositioner = DialogPositioner;
exports.DialogPropsProvider = DialogPropsProvider;
exports.DialogRoot = DialogRoot;
exports.DialogRootProvider = DialogRootProvider;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.useDialogStyles = useDialogStyles;
