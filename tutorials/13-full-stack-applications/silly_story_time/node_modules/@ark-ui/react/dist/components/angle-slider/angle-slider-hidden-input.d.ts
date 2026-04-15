import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AngleSliderHiddenInputBaseProps extends PolymorphicProps {
}
export interface AngleSliderHiddenInputProps extends HTMLProps<'input'>, AngleSliderHiddenInputBaseProps {
}
export declare const AngleSliderHiddenInput: ForwardRefExoticComponent<AngleSliderHiddenInputProps & RefAttributes<HTMLInputElement>>;
