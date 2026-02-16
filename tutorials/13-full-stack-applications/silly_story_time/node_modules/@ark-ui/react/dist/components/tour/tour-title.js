'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTourContext } from './use-tour-context.js';

const TourTitle = forwardRef((props, ref) => {
  const tour = useTourContext();
  const mergedProps = mergeProps(tour.getTitleProps(), props);
  return /* @__PURE__ */ jsx(ark.h2, { ...mergedProps, ref, children: mergedProps.children || tour.step?.title });
});
TourTitle.displayName = "TourTitle";

export { TourTitle };
