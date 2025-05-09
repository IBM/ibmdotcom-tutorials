'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useStepsContext } from './use-steps-context.js';
import { StepsItemProvider } from './use-steps-item-context.js';
import { StepsItemPropsProvider } from './use-steps-item-props-context.js';

const StepsItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["index"]);
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getItemProps(itemProps), localProps);
  const itemState = steps.getItemState(itemProps);
  return /* @__PURE__ */ jsx(StepsItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(StepsItemProvider, { value: itemState, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
StepsItem.displayName = "StepsItem";

export { StepsItem };
