import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UsePopoverReturn } from './use-popover';
interface RootProviderProps {
    value: UsePopoverReturn;
}
export interface PopoverRootProviderBaseProps extends RootProviderProps, UsePresenceProps {
}
export interface PopoverRootProviderProps extends PopoverRootProviderBaseProps {
    children?: ReactNode;
}
export declare const PopoverRootProvider: (props: PopoverRootProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
