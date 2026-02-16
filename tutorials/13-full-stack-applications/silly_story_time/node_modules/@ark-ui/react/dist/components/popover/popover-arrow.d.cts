import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverArrowBaseProps extends PolymorphicProps {
}
export interface PopoverArrowProps extends HTMLProps<'div'>, PopoverArrowBaseProps {
}
export declare const PopoverArrow: ForwardRefExoticComponent<PopoverArrowProps & RefAttributes<HTMLDivElement>>;
