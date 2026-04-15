import { ItemProps } from '@zag-js/combobox';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface ComboboxItemProps extends HTMLProps<'div'>, ComboboxItemBaseProps {
}
export declare const ComboboxItem: ForwardRefExoticComponent<ComboboxItemProps & RefAttributes<HTMLDivElement>>;
