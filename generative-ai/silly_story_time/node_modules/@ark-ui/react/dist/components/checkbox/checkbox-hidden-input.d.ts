import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CheckboxHiddenInputBaseProps extends PolymorphicProps {
}
export interface CheckboxHiddenInputProps extends HTMLProps<'input'>, CheckboxHiddenInputBaseProps {
}
export declare const CheckboxHiddenInput: ForwardRefExoticComponent<CheckboxHiddenInputProps & RefAttributes<HTMLInputElement>>;
