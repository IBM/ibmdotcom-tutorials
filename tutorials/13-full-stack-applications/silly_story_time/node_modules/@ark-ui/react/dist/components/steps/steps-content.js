'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useStepsContext } from './use-steps-context.js';

const StepsContent = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["index"]);
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getContentProps(itemProps), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
StepsContent.displayName = "StepsContent";

export { StepsContent };
