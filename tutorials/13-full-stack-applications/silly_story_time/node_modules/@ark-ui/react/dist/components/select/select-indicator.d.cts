import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectIndicatorBaseProps extends PolymorphicProps {
}
export interface SelectIndicatorProps extends HTMLProps<'div'>, SelectIndicatorBaseProps {
}
export declare const SelectIndicator: ForwardRefExoticComponent<SelectIndicatorProps & RefAttributes<HTMLDivElement>>;
