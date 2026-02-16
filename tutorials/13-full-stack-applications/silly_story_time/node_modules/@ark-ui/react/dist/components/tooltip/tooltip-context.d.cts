import { ReactNode } from 'react';
import { UseTooltipContext } from './use-tooltip-context';
export interface TooltipContextProps {
    children: (context: UseTooltipContext) => ReactNode;
}
export declare const TooltipContext: (props: TooltipContextProps) => ReactNode;
