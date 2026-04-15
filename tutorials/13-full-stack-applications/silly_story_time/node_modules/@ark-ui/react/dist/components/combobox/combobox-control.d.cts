import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxControlBaseProps extends PolymorphicProps {
}
export interface ComboboxControlProps extends HTMLProps<'div'>, ComboboxControlBaseProps {
}
export declare const ComboboxControl: ForwardRefExoticComponent<ComboboxControlProps & RefAttributes<HTMLDivElement>>;
