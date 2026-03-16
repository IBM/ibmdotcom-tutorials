import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectItemIndicatorBaseProps extends PolymorphicProps {
}
export interface SelectItemIndicatorProps extends HTMLProps<'div'>, SelectItemIndicatorBaseProps {
}
export declare const SelectItemIndicator: ForwardRefExoticComponent<SelectItemIndicatorProps & RefAttributes<HTMLDivElement>>;
