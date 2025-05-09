import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectListBaseProps extends PolymorphicProps {
}
export interface SelectListProps extends HTMLProps<'div'>, SelectListBaseProps {
}
export declare const SelectList: ForwardRefExoticComponent<SelectListProps & RefAttributes<HTMLDivElement>>;
