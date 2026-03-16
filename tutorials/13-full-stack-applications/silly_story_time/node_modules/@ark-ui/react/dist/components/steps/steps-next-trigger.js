'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useStepsContext } from './use-steps-context.js';

const StepsNextTrigger = forwardRef((props, ref) => {
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getNextTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
StepsNextTrigger.displayName = "StepsNextTrigger";

export { StepsNextTrigger };
