"use strict";
"use client";
import { Progress } from '@ark-ui/react/progress';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useProgressCircleStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "progressCircle" });
const ProgressCircleRootProvider = withProvider(Progress.RootProvider, "root", { forwardAsChild: true });
const ProgressCircleRoot = withProvider(Progress.Root, "root", { forwardAsChild: true });
const ProgressCirclePropsProvider = PropsProvider;
const ProgressCircleLabel = withContext(Progress.Label, "label", { forwardAsChild: true });
const ProgressCircleCircle = withContext(Progress.Circle, "circle", { forwardAsChild: true });
const ProgressCircleTrack = withContext(Progress.CircleTrack, "circleTrack", { forwardAsChild: true });
const ProgressCircleRange = withContext(Progress.CircleRange, "circleRange", { forwardAsChild: true });
const ProgressCircleValueText = withContext(Progress.ValueText, "valueText", { forwardAsChild: true });
const ProgressCircleContext = Progress.Context;

export { ProgressCircleCircle, ProgressCircleContext, ProgressCircleLabel, ProgressCirclePropsProvider, ProgressCircleRange, ProgressCircleRoot, ProgressCircleRootProvider, ProgressCircleTrack, ProgressCircleValueText, useProgressCircleStyles };
