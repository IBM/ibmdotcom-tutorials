import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RadioGroupLabelBaseProps extends PolymorphicProps {
}
export interface RadioGroupLabelProps extends HTMLProps<'label'>, RadioGroupLabelBaseProps {
}
export declare const RadioGroupLabel: ForwardRefExoticComponent<RadioGroupLabelProps & RefAttributes<HTMLLabelElement>>;
