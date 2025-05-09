'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useProgressContext } from './use-progress-context.js';

const ProgressCircleRange = forwardRef((props, ref) => {
  const progress = useProgressContext();
  const mergedProps = mergeProps(progress.getCircleRangeProps(), props);
  return /* @__PURE__ */ jsx(ark.circle, { ref, ...mergedProps });
});
ProgressCircleRange.displayName = "ProgressCircleRange";

export { ProgressCircleRange };
