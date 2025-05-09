import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TooltipArrowBaseProps extends PolymorphicProps {
}
export interface TooltipArrowProps extends HTMLProps<'div'>, TooltipArrowBaseProps {
}
export declare const TooltipArrow: ForwardRefExoticComponent<TooltipArrowProps & RefAttributes<HTMLDivElement>>;
