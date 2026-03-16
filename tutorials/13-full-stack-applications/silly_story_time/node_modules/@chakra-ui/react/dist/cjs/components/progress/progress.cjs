"use strict";
"use client";
'use strict';

var progress = require('@ark-ui/react/progress');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useProgressStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "progress" });
const ProgressRootProvider = withProvider(progress.Progress.RootProvider, "root", { forwardAsChild: true });
const ProgressRoot = withProvider(
  progress.Progress.Root,
  "root"
);
const ProgressPropsProvider = PropsProvider;
const ProgressLabel = withContext(
  progress.Progress.Label,
  "label",
  { forwardAsChild: true }
);
const ProgressTrack = withContext(
  progress.Progress.Track,
  "track",
  { forwardAsChild: true }
);
const ProgressRange = withContext(
  progress.Progress.Range,
  "range",
  { forwardAsChild: true }
);
const ProgressValueText = withContext(progress.Progress.ValueText, "valueText", { forwardAsChild: true });
const ProgressContext = progress.Progress.Context;

exports.ProgressContext = ProgressContext;
exports.ProgressLabel = ProgressLabel;
exports.ProgressPropsProvider = ProgressPropsProvider;
exports.ProgressRange = ProgressRange;
exports.ProgressRoot = ProgressRoot;
exports.ProgressRootProvider = ProgressRootProvider;
exports.ProgressTrack = ProgressTrack;
exports.ProgressValueText = ProgressValueText;
exports.useProgressStyles = useProgressStyles;
