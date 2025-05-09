import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldsetErrorTextBaseProps extends PolymorphicProps {
}
export interface FieldsetErrorTextProps extends HTMLProps<'span'>, FieldsetErrorTextBaseProps {
}
export declare const FieldsetErrorText: ForwardRefExoticComponent<FieldsetErrorTextProps & RefAttributes<HTMLSpanElement>>;
