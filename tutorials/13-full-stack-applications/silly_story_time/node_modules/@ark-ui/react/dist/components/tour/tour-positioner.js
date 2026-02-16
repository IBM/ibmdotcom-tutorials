'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useTourContext } from './use-tour-context.js';

const TourPositioner = forwardRef((props, ref) => {
  const tour = useTourContext();
  const mergedProps = mergeProps(tour.getPositionerProps(), props);
  const presence = usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TourPositioner.displayName = "TourPositioner";

export { TourPositioner };
