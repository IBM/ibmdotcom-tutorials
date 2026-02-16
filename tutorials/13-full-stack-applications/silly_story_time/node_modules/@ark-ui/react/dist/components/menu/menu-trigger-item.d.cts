import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuTriggerItemBaseProps extends PolymorphicProps {
}
export interface MenuTriggerItemProps extends HTMLProps<'div'>, MenuTriggerItemBaseProps {
}
export declare const MenuTriggerItem: ForwardRefExoticComponent<MenuTriggerItemProps & RefAttributes<HTMLDivElement>>;
