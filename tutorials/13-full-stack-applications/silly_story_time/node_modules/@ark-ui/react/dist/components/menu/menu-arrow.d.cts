import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuArrowBaseProps extends PolymorphicProps {
}
export interface MenuArrowProps extends HTMLProps<'div'>, MenuArrowBaseProps {
}
export declare const MenuArrow: ForwardRefExoticComponent<MenuArrowProps & RefAttributes<HTMLDivElement>>;
