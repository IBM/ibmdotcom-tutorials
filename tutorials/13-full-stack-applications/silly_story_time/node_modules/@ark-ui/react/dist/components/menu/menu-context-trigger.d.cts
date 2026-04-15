import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuContextTriggerBaseProps extends PolymorphicProps {
}
export interface MenuContextTriggerProps extends HTMLProps<'button'>, MenuContextTriggerBaseProps {
}
export declare const MenuContextTrigger: ForwardRefExoticComponent<MenuContextTriggerProps & RefAttributes<HTMLButtonElement>>;
