import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverContentBaseProps extends PolymorphicProps {
}
export interface PopoverContentProps extends HTMLProps<'div'>, PopoverContentBaseProps {
}
export declare const PopoverContent: ForwardRefExoticComponent<PopoverContentProps & RefAttributes<HTMLDivElement>>;
