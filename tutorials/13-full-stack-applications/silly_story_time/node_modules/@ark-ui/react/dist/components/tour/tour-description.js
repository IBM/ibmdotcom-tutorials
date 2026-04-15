'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTourContext } from './use-tour-context.js';

const TourDescription = forwardRef((props, ref) => {
  const tour = useTourContext();
  const mergedProps = mergeProps(tour.getDescriptionProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref, children: mergedProps.children || tour.step?.description });
});
TourDescription.displayName = "TourDescription";

export { TourDescription };
