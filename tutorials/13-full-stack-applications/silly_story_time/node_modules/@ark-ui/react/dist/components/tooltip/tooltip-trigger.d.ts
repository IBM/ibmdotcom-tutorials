import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TooltipTriggerBaseProps extends PolymorphicProps {
}
export interface TooltipTriggerProps extends HTMLProps<'button'>, TooltipTriggerBaseProps {
}
export declare const TooltipTrigger: ForwardRefExoticComponent<TooltipTriggerProps & RefAttributes<HTMLButtonElement>>;
