import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxItemGroupBaseProps extends PolymorphicProps {
}
export interface ComboboxItemGroupProps extends HTMLProps<'div'>, ComboboxItemGroupBaseProps {
}
export declare const ComboboxItemGroup: ForwardRefExoticComponent<ComboboxItemGroupProps & RefAttributes<HTMLDivElement>>;
