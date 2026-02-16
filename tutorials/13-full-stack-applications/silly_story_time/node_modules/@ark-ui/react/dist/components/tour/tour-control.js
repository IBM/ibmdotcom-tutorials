'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { tourAnatomy } from './tour.anatomy.js';

const TourControl = forwardRef((props, ref) => /* @__PURE__ */ jsx(ark.div, { ...tourAnatomy.build().control.attrs, ...props, ref }));
TourControl.displayName = "TourControl";

export { TourControl };
