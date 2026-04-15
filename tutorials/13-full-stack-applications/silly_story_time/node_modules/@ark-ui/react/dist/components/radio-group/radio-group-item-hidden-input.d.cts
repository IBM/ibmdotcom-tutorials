import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RadioGroupItemHiddenInputBaseProps extends PolymorphicProps {
}
export interface RadioGroupItemHiddenInputProps extends HTMLProps<'input'>, RadioGroupItemHiddenInputBaseProps {
}
export declare const RadioGroupItemHiddenInput: ForwardRefExoticComponent<RadioGroupItemHiddenInputProps & RefAttributes<HTMLInputElement>>;
