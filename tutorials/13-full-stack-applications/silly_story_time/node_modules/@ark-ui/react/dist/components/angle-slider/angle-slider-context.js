'use client';
import { useAngleSliderContext } from './use-angle-slider-context.js';

const AngleSliderContext = (props) => props.children(useAngleSliderContext());

export { AngleSliderContext };
