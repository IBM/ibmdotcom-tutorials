"use strict";
"use client";
import { Toggle } from '@ark-ui/react/toggle';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useToggleStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "toggle" });
const ToggleRootProvider = withProvider(Toggle.Root, "root", { forwardAsChild: true });
const ToggleRoot = withProvider(
  Toggle.Root,
  "root",
  { forwardAsChild: true }
);
const TogglePropsProvider = PropsProvider;
const ToggleIndicator = withContext(Toggle.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: { _empty: { display: "none" } }
});
const ToggleContext = Toggle.Context;

export { ToggleContext, ToggleIndicator, TogglePropsProvider, ToggleRoot, ToggleRootProvider, useToggleStyles };
