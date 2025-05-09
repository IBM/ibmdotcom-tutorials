"use strict";
'use strict';

var select = require('./select.cjs');
var select$1 = require('@ark-ui/react/select');
var namespace = require('./namespace.cjs');



exports.SelectClearTrigger = select.SelectClearTrigger;
exports.SelectContent = select.SelectContent;
exports.SelectContext = select.SelectContext;
exports.SelectControl = select.SelectControl;
exports.SelectHiddenSelect = select.SelectHiddenSelect;
exports.SelectIndicator = select.SelectIndicator;
exports.SelectIndicatorGroup = select.SelectIndicatorGroup;
exports.SelectItem = select.SelectItem;
exports.SelectItemContext = select.SelectItemContext;
exports.SelectItemGroup = select.SelectItemGroup;
exports.SelectItemGroupLabel = select.SelectItemGroupLabel;
exports.SelectItemIndicator = select.SelectItemIndicator;
exports.SelectItemText = select.SelectItemText;
exports.SelectLabel = select.SelectLabel;
exports.SelectPositioner = select.SelectPositioner;
exports.SelectPropsProvider = select.SelectPropsProvider;
exports.SelectRoot = select.SelectRoot;
exports.SelectRootProvider = select.SelectRootProvider;
exports.SelectTrigger = select.SelectTrigger;
exports.SelectValueText = select.SelectValueText;
exports.useSelectStyles = select.useSelectStyles;
Object.defineProperty(exports, "useSelect", {
  enumerable: true,
  get: function () { return select$1.useSelect; }
});
Object.defineProperty(exports, "useSelectContext", {
  enumerable: true,
  get: function () { return select$1.useSelectContext; }
});
Object.defineProperty(exports, "useSelectItemContext", {
  enumerable: true,
  get: function () { return select$1.useSelectItemContext; }
});
exports.Select = namespace;
