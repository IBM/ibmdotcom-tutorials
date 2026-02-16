'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useSliderContext = require('./use-slider-context.cjs');

const SliderContext = (props) => props.children(useSliderContext.useSliderContext());

exports.SliderContext = SliderContext;
