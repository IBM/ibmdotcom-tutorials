import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectControlBaseProps extends PolymorphicProps {
}
export interface SelectControlProps extends HTMLProps<'div'>, SelectControlBaseProps {
}
export declare const SelectControl: ForwardRefExoticComponent<SelectControlProps & RefAttributes<HTMLDivElement>>;
