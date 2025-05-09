'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { splitRenderStrategyProps, RenderStrategyPropsProvider } from '../../utils/render-strategy.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { TourProvider } from './use-tour-context.js';

const TourRoot = (props) => {
  const [presenceProps, { children, tour }] = splitPresenceProps(props);
  const [renderStrategyProps] = splitRenderStrategyProps(presenceProps);
  const presence = usePresence(mergeProps({ present: tour.open }, presenceProps));
  return /* @__PURE__ */ jsx(TourProvider, { value: tour, children: /* @__PURE__ */ jsx(RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children }) }) });
};

export { TourRoot };
