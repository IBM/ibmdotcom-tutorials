'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const switchContext = require('./switch-context.cjs');
const switchControl = require('./switch-control.cjs');
const switchHiddenInput = require('./switch-hidden-input.cjs');
const switchLabel = require('./switch-label.cjs');
const switchRoot = require('./switch-root.cjs');
const switchRootProvider = require('./switch-root-provider.cjs');
const switchThumb = require('./switch-thumb.cjs');



exports.Context = switchContext.SwitchContext;
exports.Control = switchControl.SwitchControl;
exports.HiddenInput = switchHiddenInput.SwitchHiddenInput;
exports.Label = switchLabel.SwitchLabel;
exports.Root = switchRoot.SwitchRoot;
exports.RootProvider = switchRootProvider.SwitchRootProvider;
exports.Thumb = switchThumb.SwitchThumb;
