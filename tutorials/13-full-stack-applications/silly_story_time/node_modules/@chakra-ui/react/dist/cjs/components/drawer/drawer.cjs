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
  useStyles: useDrawerStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "drawer" });
const DrawerRootProvider = withRootProvider(
  dialog.Dialog.RootProvider,
  {
    defaultProps: { unmountOnExit: true, lazyMount: true }
  }
);
const DrawerRoot = withRootProvider(dialog.Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
const DrawerRootPropsProvider = PropsProvider;
const DrawerTrigger = withContext(
  dialog.Dialog.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const DrawerPositioner = withContext(dialog.Dialog.Positioner, "positioner", { forwardAsChild: true });
const DrawerContent = withContext(
  dialog.Dialog.Content,
  "content",
  { forwardAsChild: true }
);
const DrawerDescription = withContext(dialog.Dialog.Description, "description", { forwardAsChild: true });
const DrawerTitle = withContext(
  dialog.Dialog.Title,
  "title",
  { forwardAsChild: true }
);
const DrawerCloseTrigger = withContext(dialog.Dialog.CloseTrigger, "closeTrigger", { forwardAsChild: true });
const DrawerActionTrigger = React.forwardRef(function DrawerActionTrigger2(props, ref) {
  const drawer = dialog.useDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.button, { ...props, ref, onClick: () => drawer.setOpen(false) });
});
const DrawerBackdrop = withContext(
  dialog.Dialog.Backdrop,
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
const DrawerContext = dialog.Dialog.Context;

exports.DrawerActionTrigger = DrawerActionTrigger;
exports.DrawerBackdrop = DrawerBackdrop;
exports.DrawerBody = DrawerBody;
exports.DrawerCloseTrigger = DrawerCloseTrigger;
exports.DrawerContent = DrawerContent;
exports.DrawerContext = DrawerContext;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerPositioner = DrawerPositioner;
exports.DrawerRoot = DrawerRoot;
exports.DrawerRootPropsProvider = DrawerRootPropsProvider;
exports.DrawerRootProvider = DrawerRootProvider;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.useDrawerStyles = useDrawerStyles;
