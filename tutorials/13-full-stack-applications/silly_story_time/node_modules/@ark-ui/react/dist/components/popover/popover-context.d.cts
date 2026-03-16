import { ReactNode } from 'react';
import { UsePopoverContext } from './use-popover-context';
export interface PopoverContextProps {
    children: (context: UsePopoverContext) => ReactNode;
}
export declare const PopoverContext: (props: PopoverContextProps) => ReactNode;
