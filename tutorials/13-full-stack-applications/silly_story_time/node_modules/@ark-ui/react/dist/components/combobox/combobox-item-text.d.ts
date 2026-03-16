import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxItemTextBaseProps extends PolymorphicProps {
}
export interface ComboboxItemTextProps extends HTMLProps<'span'>, ComboboxItemTextBaseProps {
}
export declare const ComboboxItemText: ForwardRefExoticComponent<ComboboxItemTextProps & RefAttributes<HTMLDivElement>>;
