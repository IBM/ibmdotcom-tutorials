'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useProgressContext } from './use-progress-context.js';

const ProgressCircle = forwardRef((props, ref) => {
  const progress = useProgressContext();
  const mergedProps = mergeProps(progress.getCircleProps(), props);
  return /* @__PURE__ */ jsx(ark.svg, { ref, ...mergedProps });
});
ProgressCircle.displayName = "ProgressCircle";

export { ProgressCircle };
