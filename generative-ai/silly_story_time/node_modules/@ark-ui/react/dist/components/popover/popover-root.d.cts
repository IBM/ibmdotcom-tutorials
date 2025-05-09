import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UsePopoverProps } from './use-popover';
export interface PopoverRootBaseProps extends UsePopoverProps, UsePresenceProps {
}
export interface PopoverRootProps extends PopoverRootBaseProps {
    children?: ReactNode;
}
export declare const PopoverRoot: (props: PopoverRootProps) => import("react/jsx-runtime").JSX.Element;
