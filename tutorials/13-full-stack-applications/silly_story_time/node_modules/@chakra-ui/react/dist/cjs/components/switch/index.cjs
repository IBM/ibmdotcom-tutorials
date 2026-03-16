"use strict";
'use strict';

var _switch = require('./switch.cjs');
var _switch$1 = require('@ark-ui/react/switch');
var namespace = require('./namespace.cjs');



exports.SwitchContext = _switch.SwitchContext;
exports.SwitchControl = _switch.SwitchControl;
exports.SwitchHiddenInput = _switch.SwitchHiddenInput;
exports.SwitchIndicator = _switch.SwitchIndicator;
exports.SwitchLabel = _switch.SwitchLabel;
exports.SwitchPropsProvider = _switch.SwitchPropsProvider;
exports.SwitchRoot = _switch.SwitchRoot;
exports.SwitchRootProvider = _switch.SwitchRootProvider;
exports.SwitchThumb = _switch.SwitchThumb;
exports.SwitchThumbIndicator = _switch.SwitchThumbIndicator;
exports.useSwitchStyles = _switch.useSwitchStyles;
Object.defineProperty(exports, "useSwitch", {
  enumerable: true,
  get: function () { return _switch$1.useSwitch; }
});
Object.defineProperty(exports, "useSwitchContext", {
  enumerable: true,
  get: function () { return _switch$1.useSwitchContext; }
});
exports.Switch = namespace;
