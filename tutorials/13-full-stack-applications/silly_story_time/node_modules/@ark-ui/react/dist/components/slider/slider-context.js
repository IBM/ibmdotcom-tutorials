'use client';
import { useSliderContext } from './use-slider-context.js';

const SliderContext = (props) => props.children(useSliderContext());

export { SliderContext };
