import { MarkerProps } from '@zag-js/angle-slider';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AngleSliderMarkerBaseProps extends MarkerProps, PolymorphicProps {
}
export interface AngleSliderMarkerProps extends Assign<HTMLProps<'div'>, AngleSliderMarkerBaseProps> {
}
export declare const AngleSliderMarker: ForwardRefExoticComponent<AngleSliderMarkerProps & RefAttributes<HTMLDivElement>>;
