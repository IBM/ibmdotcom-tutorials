'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useProgressContext } from './use-progress-context.js';

const ProgressTrack = forwardRef((props, ref) => {
  const progress = useProgressContext();
  const mergedProps = mergeProps(progress.getTrackProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ProgressTrack.displayName = "ProgressTrack";

export { ProgressTrack };
