import { OptionItemProps } from '@zag-js/menu';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
type PartialOptionItemProps = Omit<OptionItemProps, 'type' | 'checked' | 'onCheckedChange'>;
export interface MenuRadioItemBaseProps extends PartialOptionItemProps, PolymorphicProps {
}
export interface MenuRadioItemProps extends HTMLProps<'div'>, MenuRadioItemBaseProps {
}
export declare const MenuRadioItem: ForwardRefExoticComponent<MenuRadioItemProps & RefAttributes<HTMLDivElement>>;
export {};
