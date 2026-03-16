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
  useStyles: useDrawerStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "drawer" });
const DrawerRootProvider = withRootProvider(
  Dialog.RootProvider,
  {
    defaultProps: { unmountOnExit: true, lazyMount: true }
  }
);
const DrawerRoot = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
const DrawerRootPropsProvider = PropsProvider;
const DrawerTrigger = withContext(
  Dialog.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const DrawerPositioner = withContext(Dialog.Positioner, "positioner", { forwardAsChild: true });
const DrawerContent = withContext(
  Dialog.Content,
  "content",
  { forwardAsChild: true }
);
const DrawerDescription = withContext(Dialog.Description, "description", { forwardAsChild: true });
const DrawerTitle = withContext(
  Dialog.Title,
  "title",
  { forwardAsChild: true }
);
const DrawerCloseTrigger = withContext(Dialog.CloseTrigger, "closeTrigger", { forwardAsChild: true });
const DrawerActionTrigger = forwardRef(function DrawerActionTrigger2(props, ref) {
  const drawer = useDialogContext();
  return /* @__PURE__ */ jsx(chakra.button, { ...props, ref, onClick: () => drawer.setOpen(false) });
});
const DrawerBackdrop = withContext(
  Dialog.Backdrop,
  "backdrop",
  { forwardAsChild: true }
);
const DrawerBody = withContext(
  "div",
  "body"
);
const DrawerFooter = withContext(
  "div",
  "footer"
);
const DrawerHeader = withContext(
  "div",
  "header"
);
const DrawerContext = Dialog.Context;

export { DrawerActionTrigger, DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerContext, DrawerDescription, DrawerFooter, DrawerHeader, DrawerPositioner, DrawerRoot, DrawerRootPropsProvider, DrawerRootProvider, DrawerTitle, DrawerTrigger, useDrawerStyles };
