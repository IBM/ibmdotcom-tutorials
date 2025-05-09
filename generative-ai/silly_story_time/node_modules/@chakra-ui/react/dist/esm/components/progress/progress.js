"use strict";
"use client";
import { Progress } from '@ark-ui/react/progress';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useProgressStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "progress" });
const ProgressRootProvider = withProvider(Progress.RootProvider, "root", { forwardAsChild: true });
const ProgressRoot = withProvider(
  Progress.Root,
  "root"
);
const ProgressPropsProvider = PropsProvider;
const ProgressLabel = withContext(
  Progress.Label,
  "label",
  { forwardAsChild: true }
);
const ProgressTrack = withContext(
  Progress.Track,
  "track",
  { forwardAsChild: true }
);
const ProgressRange = withContext(
  Progress.Range,
  "range",
  { forwardAsChild: true }
);
const ProgressValueText = withContext(Progress.ValueText, "valueText", { forwardAsChild: true });
const ProgressContext = Progress.Context;

export { ProgressContext, ProgressLabel, ProgressPropsProvider, ProgressRange, ProgressRoot, ProgressRootProvider, ProgressTrack, ProgressValueText, useProgressStyles };
