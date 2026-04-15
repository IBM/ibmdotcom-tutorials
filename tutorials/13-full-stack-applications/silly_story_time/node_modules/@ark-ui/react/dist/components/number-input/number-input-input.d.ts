import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface NumberInputInputBaseProps extends PolymorphicProps {
}
export interface NumberInputInputProps extends HTMLProps<'input'>, NumberInputInputBaseProps {
}
export declare const NumberInputInput: ForwardRefExoticComponent<NumberInputInputProps & RefAttributes<HTMLInputElement>>;
