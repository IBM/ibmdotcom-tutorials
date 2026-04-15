import { MarkerProps } from '@zag-js/slider';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderMarkerBaseProps extends MarkerProps, PolymorphicProps {
}
export interface SliderMarkerProps extends HTMLProps<'span'>, SliderMarkerBaseProps {
}
export declare const SliderMarker: ForwardRefExoticComponent<SliderMarkerProps & RefAttributes<HTMLSpanElement>>;
