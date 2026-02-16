'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const clipboardContext = require('./clipboard-context.cjs');
const clipboardControl = require('./clipboard-control.cjs');
const clipboardIndicator = require('./clipboard-indicator.cjs');
const clipboardInput = require('./clipboard-input.cjs');
const clipboardLabel = require('./clipboard-label.cjs');
const clipboardRoot = require('./clipboard-root.cjs');
const clipboardRootProvider = require('./clipboard-root-provider.cjs');
const clipboardTrigger = require('./clipboard-trigger.cjs');
const clipboardValueText = require('./clipboard-value-text.cjs');
const useClipboard = require('./use-clipboard.cjs');
const useClipboardContext = require('./use-clipboard-context.cjs');
const clipboard$1 = require('./clipboard.cjs');
const clipboard = require('@zag-js/clipboard');



exports.ClipboardContext = clipboardContext.ClipboardContext;
exports.ClipboardControl = clipboardControl.ClipboardControl;
exports.ClipboardIndicator = clipboardIndicator.ClipboardIndicator;
exports.ClipboardInput = clipboardInput.ClipboardInput;
exports.ClipboardLabel = clipboardLabel.ClipboardLabel;
exports.ClipboardRoot = clipboardRoot.ClipboardRoot;
exports.ClipboardRootProvider = clipboardRootProvider.ClipboardRootProvider;
exports.ClipboardTrigger = clipboardTrigger.ClipboardTrigger;
exports.ClipboardValueText = clipboardValueText.ClipboardValueText;
exports.useClipboard = useClipboard.useClipboard;
exports.useClipboardContext = useClipboardContext.useClipboardContext;
exports.Clipboard = clipboard$1;
Object.defineProperty(exports, "clipboardAnatomy", {
  enumerable: true,
  get: () => clipboard.anatomy
});
