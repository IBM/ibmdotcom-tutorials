"use strict";
'use strict';

var dialog = require('./dialog.cjs');
var dialog$1 = require('@ark-ui/react/dialog');
var namespace = require('./namespace.cjs');



exports.DialogActionTrigger = dialog.DialogActionTrigger;
exports.DialogBackdrop = dialog.DialogBackdrop;
exports.DialogBody = dialog.DialogBody;
exports.DialogCloseTrigger = dialog.DialogCloseTrigger;
exports.DialogContent = dialog.DialogContent;
exports.DialogContext = dialog.DialogContext;
exports.DialogDescription = dialog.DialogDescription;
exports.DialogFooter = dialog.DialogFooter;
exports.DialogHeader = dialog.DialogHeader;
exports.DialogPositioner = dialog.DialogPositioner;
exports.DialogPropsProvider = dialog.DialogPropsProvider;
exports.DialogRoot = dialog.DialogRoot;
exports.DialogRootProvider = dialog.DialogRootProvider;
exports.DialogTitle = dialog.DialogTitle;
exports.DialogTrigger = dialog.DialogTrigger;
exports.useDialogStyles = dialog.useDialogStyles;
Object.defineProperty(exports, "useDialog", {
  enumerable: true,
  get: function () { return dialog$1.useDialog; }
});
Object.defineProperty(exports, "useDialogContext", {
  enumerable: true,
  get: function () { return dialog$1.useDialogContext; }
});
exports.Dialog = namespace;
