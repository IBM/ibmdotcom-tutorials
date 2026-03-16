"use strict";
"use client";
'use strict';

var toggle = require('@ark-ui/react/toggle');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useToggleStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "toggle" });
const ToggleRootProvider = withProvider(toggle.Toggle.Root, "root", { forwardAsChild: true });
const ToggleRoot = withProvider(
  toggle.Toggle.Root,
  "root",
  { forwardAsChild: true }
);
const TogglePropsProvider = PropsProvider;
const ToggleIndicator = withContext(toggle.Toggle.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: { _empty: { display: "none" } }
});
const ToggleContext = toggle.Toggle.Context;

exports.ToggleContext = ToggleContext;
exports.ToggleIndicator = ToggleIndicator;
exports.TogglePropsProvider = TogglePropsProvider;
exports.ToggleRoot = ToggleRoot;
exports.ToggleRootProvider = ToggleRootProvider;
exports.useToggleStyles = useToggleStyles;
