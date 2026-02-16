import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseTooltipProps } from './use-tooltip';
export interface TooltipRootBaseProps extends UseTooltipProps, UsePresenceProps {
}
export interface TooltipRootProps extends TooltipRootBaseProps {
    children?: ReactNode;
}
export declare const TooltipRoot: (props: TooltipRootProps) => import("react/jsx-runtime").JSX.Element;
