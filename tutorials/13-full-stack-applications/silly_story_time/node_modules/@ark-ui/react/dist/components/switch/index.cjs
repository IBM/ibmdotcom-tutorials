'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const switchContext = require('./switch-context.cjs');
const switchControl = require('./switch-control.cjs');
const switchHiddenInput = require('./switch-hidden-input.cjs');
const switchLabel = require('./switch-label.cjs');
const switchRoot = require('./switch-root.cjs');
const switchRootProvider = require('./switch-root-provider.cjs');
const switchThumb = require('./switch-thumb.cjs');
const useSwitch = require('./use-switch.cjs');
const useSwitchContext = require('./use-switch-context.cjs');
const _switch = require('./switch.cjs');
const zagSwitch = require('@zag-js/switch');



exports.SwitchContext = switchContext.SwitchContext;
exports.SwitchControl = switchControl.SwitchControl;
exports.SwitchHiddenInput = switchHiddenInput.SwitchHiddenInput;
exports.SwitchLabel = switchLabel.SwitchLabel;
exports.SwitchRoot = switchRoot.SwitchRoot;
exports.SwitchRootProvider = switchRootProvider.SwitchRootProvider;
exports.SwitchThumb = switchThumb.SwitchThumb;
exports.useSwitch = useSwitch.useSwitch;
exports.useSwitchContext = useSwitchContext.useSwitchContext;
exports.Switch = _switch;
Object.defineProperty(exports, "switchAnatomy", {
  enumerable: true,
  get: () => zagSwitch.anatomy
});
