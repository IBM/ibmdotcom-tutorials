import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseHoverCardReturn } from './use-hover-card';
interface RootProviderProps {
    value: UseHoverCardReturn;
}
export interface HoverCardRootProviderBaseProps extends RootProviderProps, UsePresenceProps {
}
export interface HoverCardRootProviderProps extends HoverCardRootProviderBaseProps {
    children?: ReactNode;
}
export declare const HoverCardRootProvider: (props: HoverCardRootProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
