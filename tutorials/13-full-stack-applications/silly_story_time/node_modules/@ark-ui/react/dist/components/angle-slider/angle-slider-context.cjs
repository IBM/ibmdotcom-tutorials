'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useAngleSliderContext = require('./use-angle-slider-context.cjs');

const AngleSliderContext = (props) => props.children(useAngleSliderContext.useAngleSliderContext());

exports.AngleSliderContext = AngleSliderContext;
