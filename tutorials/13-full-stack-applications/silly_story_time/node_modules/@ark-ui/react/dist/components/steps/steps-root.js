'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSteps } from './use-steps.js';
import { StepsProvider } from './use-steps-context.js';

const StepsRoot = forwardRef((props, ref) => {
  const [useStepsProps, localProps] = createSplitProps()(props, [
    "defaultStep",
    "id",
    "ids",
    "count",
    "linear",
    "onStepChange",
    "onStepComplete",
    "orientation",
    "step"
  ]);
  const steps = useSteps(useStepsProps);
  const mergedProps = mergeProps(steps.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(StepsProvider, { value: steps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
StepsRoot.displayName = "StepsRoot";

export { StepsRoot };
