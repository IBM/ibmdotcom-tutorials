import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TooltipPositionerBaseProps extends PolymorphicProps {
}
export interface TooltipPositionerProps extends HTMLProps<'div'>, TooltipPositionerBaseProps {
}
export declare const TooltipPositioner: ForwardRefExoticComponent<TooltipPositionerProps & RefAttributes<HTMLDivElement>>;
