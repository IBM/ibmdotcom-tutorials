"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Dialog, useDialogContext } from '@ark-ui/react/dialog';
import { forwardRef } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';

const {
  withRootProvider,
  withContext,
  useStyles: useDialogStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "dialog" });
const DialogRootProvider = withRootProvider(
  Dialog.RootProvider,
  {
    defaultProps: { unmountOnExit: true, lazyMount: true }
  }
);
const DialogRoot = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
const DialogPropsProvider = PropsProvider;
const DialogTrigger = withContext(
  Dialog.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const DialogPositioner = withContext(Dialog.Positioner, "positioner", { forwardAsChild: true });
const DialogContent = withContext(
  Dialog.Content,
  "content",
  { forwardAsChild: true }
);
const DialogDescription = withContext(Dialog.Description, "description", { forwardAsChild: true });
const DialogTitle = withContext(
  Dialog.Title,
  "title",
  { forwardAsChild: true }
);
const DialogCloseTrigger = withContext(Dialog.CloseTrigger, "closeTrigger", { forwardAsChild: true });
const DialogActionTrigger = forwardRef(function DialogActionTrigger2(props, ref) {
  const dialog = useDialogContext();
  return /* @__PURE__ */ jsx(chakra.button, { ...props, ref, onClick: () => dialog.setOpen(false) });
});
const DialogBackdrop = withContext(
  Dialog.Backdrop,
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
const DialogContext = Dialog.Context;

export { DialogActionTrigger, DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogContext, DialogDescription, DialogFooter, DialogHeader, DialogPositioner, DialogPropsProvider, DialogRoot, DialogRootProvider, DialogTitle, DialogTrigger, useDialogStyles };
