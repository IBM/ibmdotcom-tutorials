import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderRangeBaseProps extends PolymorphicProps {
}
export interface SliderRangeProps extends HTMLProps<'div'>, SliderRangeBaseProps {
}
export declare const SliderRange: ForwardRefExoticComponent<SliderRangeProps & RefAttributes<HTMLDivElement>>;
