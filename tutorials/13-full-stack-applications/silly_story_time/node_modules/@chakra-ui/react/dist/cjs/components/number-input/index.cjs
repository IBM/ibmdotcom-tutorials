"use strict";
'use strict';

var numberInput = require('./number-input.cjs');
var numberInput$1 = require('@ark-ui/react/number-input');
var namespace = require('./namespace.cjs');



exports.NumberInputContext = numberInput.NumberInputContext;
exports.NumberInputControl = numberInput.NumberInputControl;
exports.NumberInputDecrementTrigger = numberInput.NumberInputDecrementTrigger;
exports.NumberInputIncrementTrigger = numberInput.NumberInputIncrementTrigger;
exports.NumberInputInput = numberInput.NumberInputInput;
exports.NumberInputLabel = numberInput.NumberInputLabel;
exports.NumberInputPropsProvider = numberInput.NumberInputPropsProvider;
exports.NumberInputRoot = numberInput.NumberInputRoot;
exports.NumberInputRootProvider = numberInput.NumberInputRootProvider;
exports.NumberInputScrubber = numberInput.NumberInputScrubber;
exports.NumberInputValueText = numberInput.NumberInputValueText;
exports.useNumberInputStyles = numberInput.useNumberInputStyles;
Object.defineProperty(exports, "useNumberInput", {
  enumerable: true,
  get: function () { return numberInput$1.useNumberInput; }
});
Object.defineProperty(exports, "useNumberInputContext", {
  enumerable: true,
  get: function () { return numberInput$1.useNumberInputContext; }
});
exports.NumberInput = namespace;
