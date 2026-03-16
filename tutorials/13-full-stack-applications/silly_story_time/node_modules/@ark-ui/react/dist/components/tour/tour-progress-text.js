'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTourContext } from './use-tour-context.js';

const TourProgressText = forwardRef((props, ref) => {
  const tour = useTourContext();
  const mergedProps = mergeProps(tour.getProgressTextProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref, children: mergedProps.children || tour.getProgressText() });
});
TourProgressText.displayName = "TourProgressText";

export { TourProgressText };
