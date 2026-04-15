import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuItemGroupLabelBaseProps extends PolymorphicProps {
}
export interface MenuItemGroupLabelProps extends HTMLProps<'div'>, MenuItemGroupLabelBaseProps {
}
export declare const MenuItemGroupLabel: ForwardRefExoticComponent<MenuItemGroupLabelProps & RefAttributes<HTMLDivElement>>;
