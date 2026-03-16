import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectItemTextBaseProps extends PolymorphicProps {
}
export interface SelectItemTextProps extends HTMLProps<'span'>, SelectItemTextBaseProps {
}
export declare const SelectItemText: ForwardRefExoticComponent<SelectItemTextProps & RefAttributes<HTMLDivElement>>;
