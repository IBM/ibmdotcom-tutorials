import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderControlBaseProps extends PolymorphicProps {
}
export interface SliderControlProps extends HTMLProps<'div'>, SliderControlBaseProps {
}
export declare const SliderControl: ForwardRefExoticComponent<SliderControlProps & RefAttributes<HTMLDivElement>>;
