import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectContentBaseProps extends PolymorphicProps {
}
export interface SelectContentProps extends HTMLProps<'div'>, SelectContentBaseProps {
}
export declare const SelectContent: ForwardRefExoticComponent<SelectContentProps & RefAttributes<HTMLDivElement>>;
