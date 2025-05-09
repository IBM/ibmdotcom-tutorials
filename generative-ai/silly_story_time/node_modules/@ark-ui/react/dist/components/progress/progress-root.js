'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useProgress } from './use-progress.js';
import { ProgressProvider } from './use-progress-context.js';

const ProgressRoot = forwardRef((props, ref) => {
  const [progressProps, localProps] = createSplitProps()(props, [
    "defaultValue",
    "formatOptions",
    "id",
    "ids",
    "locale",
    "max",
    "min",
    "onValueChange",
    "orientation",
    "translations",
    "value"
  ]);
  const progress = useProgress(progressProps);
  const mergedProps = mergeProps(progress.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ProgressProvider, { value: progress, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ProgressRoot.displayName = "ProgressRoot";

export { ProgressRoot };
