'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTourContext } from './use-tour-context.js';

const TourCloseTrigger = forwardRef((props, ref) => {
  const tour = useTourContext();
  const mergedProps = mergeProps(tour.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
TourCloseTrigger.displayName = "TourCloseTrigger";

export { TourCloseTrigger };
