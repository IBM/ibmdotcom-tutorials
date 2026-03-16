import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuItemIndicatorBaseProps extends PolymorphicProps {
}
export interface MenuItemIndicatorProps extends HTMLProps<'div'>, MenuItemIndicatorBaseProps {
}
export declare const MenuItemIndicator: ForwardRefExoticComponent<MenuItemIndicatorProps & RefAttributes<HTMLDivElement>>;
