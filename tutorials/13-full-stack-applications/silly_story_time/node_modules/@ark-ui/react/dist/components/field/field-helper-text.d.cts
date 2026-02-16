import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldHelperTextBaseProps extends PolymorphicProps {
}
export interface FieldHelperTextProps extends HTMLProps<'span'>, FieldHelperTextBaseProps {
}
export declare const FieldHelperText: ForwardRefExoticComponent<FieldHelperTextProps & RefAttributes<HTMLSpanElement>>;
