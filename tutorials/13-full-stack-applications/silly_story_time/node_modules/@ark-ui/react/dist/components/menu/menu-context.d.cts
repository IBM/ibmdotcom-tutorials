import { ReactNode } from 'react';
import { UseMenuContext } from './use-menu-context';
export interface MenuContextProps {
    children: (context: UseMenuContext) => ReactNode;
}
export declare const MenuContext: (props: MenuContextProps) => ReactNode;
