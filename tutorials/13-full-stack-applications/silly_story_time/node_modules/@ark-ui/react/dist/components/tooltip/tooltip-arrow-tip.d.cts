import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TooltipArrowTipBaseProps extends PolymorphicProps {
}
export interface TooltipArrowTipProps extends HTMLProps<'div'>, TooltipArrowTipBaseProps {
}
export declare const TooltipArrowTip: ForwardRefExoticComponent<TooltipArrowTipProps & RefAttributes<HTMLDivElement>>;
