import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseTooltipReturn } from './use-tooltip';
interface RootProviderProps {
    value: UseTooltipReturn;
}
export interface TooltipRootProviderBaseProps extends RootProviderProps, UsePresenceProps {
}
export interface TooltipRootProviderProps extends TooltipRootProviderBaseProps {
    children?: ReactNode;
}
export declare const TooltipRootProvider: (props: TooltipRootProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
