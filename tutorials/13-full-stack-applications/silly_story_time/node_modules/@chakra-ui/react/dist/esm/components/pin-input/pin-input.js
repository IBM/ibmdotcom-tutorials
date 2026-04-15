"use strict";
"use client";
import { PinInput } from '@ark-ui/react/pin-input';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: usePinInputStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "pinInput" });
const PinInputRootProvider = withProvider(PinInput.RootProvider, "root", { forwardAsChild: true });
const PinInputRoot = withProvider(
  PinInput.Root,
  "root",
  { forwardProps: ["mask"], forwardAsChild: true }
);
const PinInputPropsProvider = PropsProvider;
const PinInputControl = withContext(PinInput.Control, "control", { forwardAsChild: true });
const PinInputInput = withContext(
  PinInput.Input,
  "input",
  { forwardAsChild: true }
);
const PinInputLabel = withContext(
  PinInput.Label,
  "label",
  { forwardAsChild: true }
);
const PinInputContext = PinInput.Context;
const PinInputHiddenInput = PinInput.HiddenInput;

export { PinInputContext, PinInputControl, PinInputHiddenInput, PinInputInput, PinInputLabel, PinInputPropsProvider, PinInputRoot, PinInputRootProvider, usePinInputStyles };
