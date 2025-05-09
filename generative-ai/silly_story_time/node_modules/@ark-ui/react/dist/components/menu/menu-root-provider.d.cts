import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseMenuReturn } from './use-menu';
interface RootProviderProps {
    value: UseMenuReturn;
}
export interface MenuRootProviderBaseProps extends RootProviderProps, UsePresenceProps {
}
export interface MenuRootProviderProps extends MenuRootProviderBaseProps {
    children?: ReactNode;
}
export declare const MenuRootProvider: (props: MenuRootProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
