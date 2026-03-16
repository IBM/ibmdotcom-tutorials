'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const factory = require('../factory.cjs');
const tour_anatomy = require('./tour.anatomy.cjs');

const TourControl = react.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...tour_anatomy.tourAnatomy.build().control.attrs, ...props, ref }));
TourControl.displayName = "TourControl";

exports.TourControl = TourControl;
