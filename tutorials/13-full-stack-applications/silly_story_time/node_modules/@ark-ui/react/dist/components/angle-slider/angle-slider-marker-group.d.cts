import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AngleSliderMarkerGroupBaseProps extends PolymorphicProps {
}
export interface AngleSliderMarkerGroupProps extends HTMLProps<'div'>, AngleSliderMarkerGroupBaseProps {
}
export declare const AngleSliderMarkerGroup: ForwardRefExoticComponent<AngleSliderMarkerGroupProps & RefAttributes<HTMLDivElement>>;
