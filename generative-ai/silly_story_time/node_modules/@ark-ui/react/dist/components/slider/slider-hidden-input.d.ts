import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderHiddenInputBaseProps extends PolymorphicProps {
}
export interface SliderHiddenInputProps extends HTMLProps<'input'>, SliderHiddenInputBaseProps {
}
export declare const SliderHiddenInput: ForwardRefExoticComponent<SliderHiddenInputProps & RefAttributes<HTMLInputElement>>;
