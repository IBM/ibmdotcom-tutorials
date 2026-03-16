"use strict";
'use strict';

var checkbox = require('./checkbox.cjs');
var checkbox$1 = require('@ark-ui/react/checkbox');
var namespace = require('./namespace.cjs');



exports.CheckboxContext = checkbox.CheckboxContext;
exports.CheckboxControl = checkbox.CheckboxControl;
exports.CheckboxGroup = checkbox.CheckboxGroup;
exports.CheckboxHiddenInput = checkbox.CheckboxHiddenInput;
exports.CheckboxIndicator = checkbox.CheckboxIndicator;
exports.CheckboxLabel = checkbox.CheckboxLabel;
exports.CheckboxPropsProvider = checkbox.CheckboxPropsProvider;
exports.CheckboxRoot = checkbox.CheckboxRoot;
exports.CheckboxRootProvider = checkbox.CheckboxRootProvider;
exports.useCheckboxStyles = checkbox.useCheckboxStyles;
Object.defineProperty(exports, "useCheckbox", {
  enumerable: true,
  get: function () { return checkbox$1.useCheckbox; }
});
Object.defineProperty(exports, "useCheckboxContext", {
  enumerable: true,
  get: function () { return checkbox$1.useCheckboxContext; }
});
Object.defineProperty(exports, "useCheckboxGroup", {
  enumerable: true,
  get: function () { return checkbox$1.useCheckboxGroup; }
});
Object.defineProperty(exports, "useCheckboxGroupContext", {
  enumerable: true,
  get: function () { return checkbox$1.useCheckboxGroupContext; }
});
exports.Checkbox = namespace;
