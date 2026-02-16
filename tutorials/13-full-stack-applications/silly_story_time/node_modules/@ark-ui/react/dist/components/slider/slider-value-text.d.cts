import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderValueTextBaseProps extends PolymorphicProps {
}
export interface SliderValueTextProps extends HTMLProps<'span'>, SliderValueTextBaseProps {
}
export declare const SliderValueText: ForwardRefExoticComponent<SliderValueTextProps & RefAttributes<HTMLDivElement>>;
