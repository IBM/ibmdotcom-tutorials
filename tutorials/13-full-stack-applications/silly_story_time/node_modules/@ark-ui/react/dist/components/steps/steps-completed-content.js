'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useStepsContext } from './use-steps-context.js';

const StepsCompletedContent = forwardRef((props, ref) => {
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getContentProps({ index: steps.count }), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
StepsCompletedContent.displayName = "StepsCompletedContent";

export { StepsCompletedContent };
