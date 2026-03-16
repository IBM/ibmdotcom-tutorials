import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RadioGroupItemTextBaseProps extends PolymorphicProps {
}
export interface RadioGroupItemTextProps extends HTMLProps<'span'>, RadioGroupItemTextBaseProps {
}
export declare const RadioGroupItemText: ForwardRefExoticComponent<RadioGroupItemTextProps & RefAttributes<HTMLSpanElement>>;
