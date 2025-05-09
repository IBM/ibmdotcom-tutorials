'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useTourContext } from './use-tour-context.js';

const TourActionTrigger = forwardRef((props, ref) => {
  const [actionTriggerProps, localProps] = createSplitProps()(props, ["action"]);
  const tour = useTourContext();
  const mergedProps = mergeProps(tour.getActionTriggerProps(actionTriggerProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref, children: mergedProps.children || actionTriggerProps.action.label });
});
TourActionTrigger.displayName = "TourActionTrigger";

export { TourActionTrigger };
