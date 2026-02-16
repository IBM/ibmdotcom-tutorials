import { Optional } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseMenuItemGroupContext } from './use-menu-item-group-context';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
type OptionalUseMenuItemGroupContext = Optional<UseMenuItemGroupContext, 'id'>;
export interface MenuRadioItemGroupBaseProps extends OptionalUseMenuItemGroupContext, PolymorphicProps {
}
export interface MenuRadioItemGroupProps extends HTMLProps<'div'>, MenuRadioItemGroupBaseProps {
}
export declare const MenuRadioItemGroup: ForwardRefExoticComponent<MenuRadioItemGroupProps & RefAttributes<HTMLDivElement>>;
export {};
