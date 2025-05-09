import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldErrorTextBaseProps extends PolymorphicProps {
}
export interface FieldErrorTextProps extends HTMLProps<'span'>, FieldErrorTextBaseProps {
}
export declare const FieldErrorText: ForwardRefExoticComponent<FieldErrorTextProps & RefAttributes<HTMLSpanElement>>;
