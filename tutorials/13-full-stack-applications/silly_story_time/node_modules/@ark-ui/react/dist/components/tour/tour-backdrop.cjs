'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const renderStrategy = require('../../utils/render-strategy.cjs');
const factory = require('../factory.cjs');
const usePresence = require('../presence/use-presence.cjs');
const useTourContext = require('./use-tour-context.cjs');

const TourBackdrop = react.forwardRef((props, ref) => {
  const tour = useTourContext.useTourContext();
  const renderStrategyProps = renderStrategy.useRenderStrategyPropsContext();
  const presence = usePresence.usePresence({
    ...renderStrategyProps,
    present: tour.open
  });
  const mergedProps = react$1.mergeProps(tour.getBackdropProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref), hidden: !tour.step?.backdrop });
});
TourBackdrop.displayName = "TourBackdrop";

exports.TourBackdrop = TourBackdrop;
