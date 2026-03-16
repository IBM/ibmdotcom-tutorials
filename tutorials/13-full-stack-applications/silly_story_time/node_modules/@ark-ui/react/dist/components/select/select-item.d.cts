import { ItemProps } from '@zag-js/select';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface SelectItemProps extends HTMLProps<'div'>, SelectItemBaseProps {
}
export declare const SelectItem: ForwardRefExoticComponent<SelectItemProps & RefAttributes<HTMLDivElement>>;
