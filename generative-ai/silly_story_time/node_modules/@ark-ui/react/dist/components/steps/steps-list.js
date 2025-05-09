'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useStepsContext } from './use-steps-context.js';

const StepsList = forwardRef((props, ref) => {
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getListProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
StepsList.displayName = "StepsList";

export { StepsList };
