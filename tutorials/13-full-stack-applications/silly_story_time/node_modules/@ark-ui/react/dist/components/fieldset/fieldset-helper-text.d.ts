import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldsetHelperTextBaseProps extends PolymorphicProps {
}
export interface FieldsetHelperTextProps extends HTMLProps<'span'>, FieldsetHelperTextBaseProps {
}
export declare const FieldsetHelperText: ForwardRefExoticComponent<FieldsetHelperTextProps & RefAttributes<HTMLSpanElement>>;
