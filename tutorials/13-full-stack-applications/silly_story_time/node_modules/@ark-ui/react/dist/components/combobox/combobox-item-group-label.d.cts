import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxItemGroupLabelBaseProps extends PolymorphicProps {
}
export interface ComboboxItemGroupLabelProps extends HTMLProps<'div'>, ComboboxItemGroupLabelBaseProps {
}
export declare const ComboboxItemGroupLabel: ForwardRefExoticComponent<ComboboxItemGroupLabelProps & RefAttributes<HTMLDivElement>>;
