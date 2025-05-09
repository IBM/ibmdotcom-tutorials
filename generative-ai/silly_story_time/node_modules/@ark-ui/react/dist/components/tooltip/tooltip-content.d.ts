import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TooltipContentBaseProps extends PolymorphicProps {
}
export interface TooltipContentProps extends HTMLProps<'div'>, TooltipContentBaseProps {
}
export declare const TooltipContent: ForwardRefExoticComponent<TooltipContentProps & RefAttributes<HTMLDivElement>>;
