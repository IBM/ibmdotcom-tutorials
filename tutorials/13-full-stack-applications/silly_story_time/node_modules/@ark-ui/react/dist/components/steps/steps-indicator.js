'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useStepsContext } from './use-steps-context.js';
import { useStepsItemPropsContext } from './use-steps-item-props-context.js';

const StepsIndicator = forwardRef((props, ref) => {
  const steps = useStepsContext();
  const itemProps = useStepsItemPropsContext();
  const mergedProps = mergeProps(steps.getIndicatorProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
StepsIndicator.displayName = "StepsIndicator";

export { StepsIndicator };
