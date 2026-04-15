import { ReactNode } from 'react';
import { UseHoverCardContext } from './use-hover-card-context';
export interface HoverCardContextProps {
    children: (context: UseHoverCardContext) => ReactNode;
}
export declare const HoverCardContext: (props: HoverCardContextProps) => ReactNode;
