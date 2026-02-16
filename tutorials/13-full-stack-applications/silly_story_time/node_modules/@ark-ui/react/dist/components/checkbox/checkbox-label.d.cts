import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CheckboxLabelBaseProps extends PolymorphicProps {
}
export interface CheckboxLabelProps extends HTMLProps<'span'>, CheckboxLabelBaseProps {
}
export declare const CheckboxLabel: ForwardRefExoticComponent<CheckboxLabelProps & RefAttributes<HTMLSpanElement>>;
