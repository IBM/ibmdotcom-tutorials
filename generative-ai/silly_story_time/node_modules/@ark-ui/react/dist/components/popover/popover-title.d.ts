import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverTitleBaseProps extends PolymorphicProps {
}
export interface PopoverTitleProps extends HTMLProps<'div'>, PopoverTitleBaseProps {
}
export declare const PopoverTitle: ForwardRefExoticComponent<PopoverTitleProps & RefAttributes<HTMLDivElement>>;
