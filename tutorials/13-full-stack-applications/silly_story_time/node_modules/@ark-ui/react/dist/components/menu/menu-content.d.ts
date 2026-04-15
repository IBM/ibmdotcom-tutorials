import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuContentBaseProps extends PolymorphicProps {
}
export interface MenuContentProps extends HTMLProps<'div'>, MenuContentBaseProps {
}
export declare const MenuContent: ForwardRefExoticComponent<MenuContentProps & RefAttributes<HTMLDivElement>>;
