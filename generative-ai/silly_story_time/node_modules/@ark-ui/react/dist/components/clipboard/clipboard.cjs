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



exports.Context = clipboardContext.ClipboardContext;
exports.Control = clipboardControl.ClipboardControl;
exports.Indicator = clipboardIndicator.ClipboardIndicator;
exports.Input = clipboardInput.ClipboardInput;
exports.Label = clipboardLabel.ClipboardLabel;
exports.Root = clipboardRoot.ClipboardRoot;
exports.RootProvider = clipboardRootProvider.ClipboardRootProvider;
exports.Trigger = clipboardTrigger.ClipboardTrigger;
exports.ValueText = clipboardValueText.ClipboardValueText;
