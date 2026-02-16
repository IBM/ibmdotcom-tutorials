import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectItemGroupLabelBaseProps extends PolymorphicProps {
}
export interface SelectItemGroupLabelProps extends HTMLProps<'div'>, SelectItemGroupLabelBaseProps {
}
export declare const SelectItemGroupLabel: ForwardRefExoticComponent<SelectItemGroupLabelProps & RefAttributes<HTMLDivElement>>;
