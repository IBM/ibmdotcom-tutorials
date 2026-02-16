'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const renderStrategy = require('../../utils/render-strategy.cjs');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useTourContext = require('./use-tour-context.cjs');

const TourRoot = (props) => {
  const [presenceProps, { children, tour }] = splitPresenceProps.splitPresenceProps(props);
  const [renderStrategyProps] = renderStrategy.splitRenderStrategyProps(presenceProps);
  const presence = usePresence.usePresence(react.mergeProps({ present: tour.open }, presenceProps));
  return /* @__PURE__ */ jsxRuntime.jsx(useTourContext.TourProvider, { value: tour, children: /* @__PURE__ */ jsxRuntime.jsx(renderStrategy.RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children }) }) });
};

exports.TourRoot = TourRoot;
