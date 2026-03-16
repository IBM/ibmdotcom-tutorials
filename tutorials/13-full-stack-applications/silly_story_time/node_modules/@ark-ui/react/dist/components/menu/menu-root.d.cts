import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseMenuProps } from './use-menu';
export interface MenuRootBaseProps extends UseMenuProps, UsePresenceProps {
}
export interface MenuRootProps extends MenuRootBaseProps {
    children?: ReactNode;
}
export declare const MenuRoot: (props: MenuRootProps) => import("react/jsx-runtime").JSX.Element;
