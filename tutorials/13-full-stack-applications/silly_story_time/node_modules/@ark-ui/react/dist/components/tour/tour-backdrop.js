'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { useRenderStrategyPropsContext } from '../../utils/render-strategy.js';
import { ark } from '../factory.js';
import { usePresence } from '../presence/use-presence.js';
import { useTourContext } from './use-tour-context.js';

const TourBackdrop = forwardRef((props, ref) => {
  const tour = useTourContext();
  const renderStrategyProps = useRenderStrategyPropsContext();
  const presence = usePresence({
    ...renderStrategyProps,
    present: tour.open
  });
  const mergedProps = mergeProps(tour.getBackdropProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref), hidden: !tour.step?.backdrop });
});
TourBackdrop.displayName = "TourBackdrop";

export { TourBackdrop };
