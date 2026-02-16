import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldInputBaseProps extends PolymorphicProps {
}
export interface FieldInputProps extends HTMLProps<'input'>, FieldInputBaseProps {
}
export declare const FieldInput: ForwardRefExoticComponent<FieldInputProps & RefAttributes<HTMLInputElement>>;
