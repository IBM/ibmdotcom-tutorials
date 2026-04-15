import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectItemGroupBaseProps extends PolymorphicProps {
}
export interface SelectItemGroupProps extends HTMLProps<'div'>, SelectItemGroupBaseProps {
}
export declare const SelectItemGroup: ForwardRefExoticComponent<SelectItemGroupProps & RefAttributes<HTMLDivElement>>;
