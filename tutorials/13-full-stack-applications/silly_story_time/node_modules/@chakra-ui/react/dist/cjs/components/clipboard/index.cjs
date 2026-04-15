"use strict";
'use strict';

var clipboard = require('./clipboard.cjs');
var clipboard$1 = require('@ark-ui/react/clipboard');
var namespace = require('./namespace.cjs');



exports.ClipboardContext = clipboard.ClipboardContext;
exports.ClipboardControl = clipboard.ClipboardControl;
exports.ClipboardCopyText = clipboard.ClipboardCopyText;
exports.ClipboardIndicator = clipboard.ClipboardIndicator;
exports.ClipboardInput = clipboard.ClipboardInput;
exports.ClipboardLabel = clipboard.ClipboardLabel;
exports.ClipboardPropsProvider = clipboard.ClipboardPropsProvider;
exports.ClipboardRoot = clipboard.ClipboardRoot;
exports.ClipboardRootProvider = clipboard.ClipboardRootProvider;
exports.ClipboardTrigger = clipboard.ClipboardTrigger;
exports.ClipboardValueText = clipboard.ClipboardValueText;
exports.useClipboardStyles = clipboard.useClipboardStyles;
Object.defineProperty(exports, "useClipboard", {
  enumerable: true,
  get: function () { return clipboard$1.useClipboard; }
});
Object.defineProperty(exports, "useClipboardContext", {
  enumerable: true,
  get: function () { return clipboard$1.useClipboardContext; }
});
exports.Clipboard = namespace;
