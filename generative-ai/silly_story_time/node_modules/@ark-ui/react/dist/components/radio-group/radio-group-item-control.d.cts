import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RadioGroupItemControlBaseProps extends PolymorphicProps {
}
export interface RadioGroupItemControlProps extends HTMLProps<'div'>, RadioGroupItemControlBaseProps {
}
export declare const RadioGroupItemControl: ForwardRefExoticComponent<RadioGroupItemControlProps & RefAttributes<HTMLDivElement>>;
