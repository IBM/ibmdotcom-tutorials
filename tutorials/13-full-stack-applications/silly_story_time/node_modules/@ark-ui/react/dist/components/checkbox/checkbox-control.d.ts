import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CheckboxControlBaseProps extends PolymorphicProps {
}
export interface CheckboxControlProps extends HTMLProps<'div'>, CheckboxControlBaseProps {
}
export declare const CheckboxControl: ForwardRefExoticComponent<CheckboxControlProps & RefAttributes<HTMLDivElement>>;
