'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useStepsContext } from './use-steps-context.js';

const StepsPrevTrigger = forwardRef((props, ref) => {
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getPrevTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
StepsPrevTrigger.displayName = "StepsPrevTrigger";

export { StepsPrevTrigger };
