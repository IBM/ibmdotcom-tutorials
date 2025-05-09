import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderMarkerGroupBaseProps extends PolymorphicProps {
}
export interface SliderMarkerGroupProps extends HTMLProps<'div'>, SliderMarkerGroupBaseProps {
}
export declare const SliderMarkerGroup: ForwardRefExoticComponent<SliderMarkerGroupProps & RefAttributes<HTMLDivElement>>;
