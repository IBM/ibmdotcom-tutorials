import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuItemTextBaseProps extends PolymorphicProps {
}
export interface MenuItemTextProps extends HTMLProps<'div'>, MenuItemTextBaseProps {
}
export declare const MenuItemText: ForwardRefExoticComponent<MenuItemTextProps & RefAttributes<HTMLDivElement>>;
