"use strict";
"use client";
'use strict';

var progress = require('@ark-ui/react/progress');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useProgressCircleStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "progressCircle" });
const ProgressCircleRootProvider = withProvider(progress.Progress.RootProvider, "root", { forwardAsChild: true });
const ProgressCircleRoot = withProvider(progress.Progress.Root, "root", { forwardAsChild: true });
const ProgressCirclePropsProvider = PropsProvider;
const ProgressCircleLabel = withContext(progress.Progress.Label, "label", { forwardAsChild: true });
const ProgressCircleCircle = withContext(progress.Progress.Circle, "circle", { forwardAsChild: true });
const ProgressCircleTrack = withContext(progress.Progress.CircleTrack, "circleTrack", { forwardAsChild: true });
const ProgressCircleRange = withContext(progress.Progress.CircleRange, "circleRange", { forwardAsChild: true });
const ProgressCircleValueText = withContext(progress.Progress.ValueText, "valueText", { forwardAsChild: true });
const ProgressCircleContext = progress.Progress.Context;

exports.ProgressCircleCircle = ProgressCircleCircle;
exports.ProgressCircleContext = ProgressCircleContext;
exports.ProgressCircleLabel = ProgressCircleLabel;
exports.ProgressCirclePropsProvider = ProgressCirclePropsProvider;
exports.ProgressCircleRange = ProgressCircleRange;
exports.ProgressCircleRoot = ProgressCircleRoot;
exports.ProgressCircleRootProvider = ProgressCircleRootProvider;
exports.ProgressCircleTrack = ProgressCircleTrack;
exports.ProgressCircleValueText = ProgressCircleValueText;
exports.useProgressCircleStyles = useProgressCircleStyles;
