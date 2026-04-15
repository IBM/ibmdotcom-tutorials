'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTourContext } from './use-tour-context.js';

const TourArrow = forwardRef((props, ref) => {
  const tour = useTourContext();
  const mergedProps = mergeProps(tour.getArrowProps(), props);
  return tour.step?.arrow ? /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) : null;
});
TourArrow.displayName = "TourArrow";

export { TourArrow };
