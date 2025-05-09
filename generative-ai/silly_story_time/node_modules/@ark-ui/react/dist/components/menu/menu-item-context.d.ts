import { ReactNode } from 'react';
import { UseMenuItemContext } from './use-menu-item-context';
export interface MenuItemContextProps {
    children: (context: UseMenuItemContext) => ReactNode;
}
export declare const MenuItemContext: (props: MenuItemContextProps) => ReactNode;
