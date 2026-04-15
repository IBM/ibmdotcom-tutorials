import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AngleSliderControlBaseProps extends PolymorphicProps {
}
export interface AngleSliderControlProps extends HTMLProps<'div'>, AngleSliderControlBaseProps {
}
export declare const AngleSliderControl: ForwardRefExoticComponent<AngleSliderControlProps & RefAttributes<HTMLDivElement>>;
