"use strict";
"use client";
'use strict';

var pinInput = require('@ark-ui/react/pin-input');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: usePinInputStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "pinInput" });
const PinInputRootProvider = withProvider(pinInput.PinInput.RootProvider, "root", { forwardAsChild: true });
const PinInputRoot = withProvider(
  pinInput.PinInput.Root,
  "root",
  { forwardProps: ["mask"], forwardAsChild: true }
);
const PinInputPropsProvider = PropsProvider;
const PinInputControl = withContext(pinInput.PinInput.Control, "control", { forwardAsChild: true });
const PinInputInput = withContext(
  pinInput.PinInput.Input,
  "input",
  { forwardAsChild: true }
);
const PinInputLabel = withContext(
  pinInput.PinInput.Label,
  "label",
  { forwardAsChild: true }
);
const PinInputContext = pinInput.PinInput.Context;
const PinInputHiddenInput = pinInput.PinInput.HiddenInput;

exports.PinInputContext = PinInputContext;
exports.PinInputControl = PinInputControl;
exports.PinInputHiddenInput = PinInputHiddenInput;
exports.PinInputInput = PinInputInput;
exports.PinInputLabel = PinInputLabel;
exports.PinInputPropsProvider = PinInputPropsProvider;
exports.PinInputRoot = PinInputRoot;
exports.PinInputRootProvider = PinInputRootProvider;
exports.usePinInputStyles = usePinInputStyles;
