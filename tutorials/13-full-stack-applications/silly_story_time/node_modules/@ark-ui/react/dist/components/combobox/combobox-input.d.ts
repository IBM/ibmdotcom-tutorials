import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxInputBaseProps extends PolymorphicProps {
}
export interface ComboboxInputProps extends HTMLProps<'input'>, ComboboxInputBaseProps {
}
export declare const ComboboxInput: ForwardRefExoticComponent<ComboboxInputProps & RefAttributes<HTMLInputElement>>;
