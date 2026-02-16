import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseHoverCardProps } from './use-hover-card';
export interface HoverCardRootBaseProps extends UseHoverCardProps, UsePresenceProps {
}
export interface HoverCardRootProps extends HoverCardRootBaseProps {
    children?: ReactNode;
}
export declare const HoverCardRoot: (props: HoverCardRootProps) => import("react/jsx-runtime").JSX.Element;
