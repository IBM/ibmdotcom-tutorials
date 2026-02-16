'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useProgressContext } from './use-progress-context.js';

const ProgressLabel = forwardRef((props, ref) => {
  const progress = useProgressContext();
  const mergedProps = mergeProps(progress.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
ProgressLabel.displayName = "ProgressLabel";

export { ProgressLabel };
