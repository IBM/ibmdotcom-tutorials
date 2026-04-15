import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuTriggerBaseProps extends PolymorphicProps {
}
export interface MenuTriggerProps extends HTMLProps<'button'>, MenuTriggerBaseProps {
}
export declare const MenuTrigger: ForwardRefExoticComponent<MenuTriggerProps & RefAttributes<HTMLButtonElement>>;
