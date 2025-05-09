import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderLabelBaseProps extends PolymorphicProps {
}
export interface SliderLabelProps extends HTMLProps<'label'>, SliderLabelBaseProps {
}
export declare const SliderLabel: ForwardRefExoticComponent<SliderLabelProps & RefAttributes<HTMLLabelElement>>;
