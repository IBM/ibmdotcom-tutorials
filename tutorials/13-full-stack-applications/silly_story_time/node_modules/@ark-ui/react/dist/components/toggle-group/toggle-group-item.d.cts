import { ItemProps } from '@zag-js/toggle-group';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToggleGroupItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface ToggleGroupItemProps extends Assign<HTMLProps<'button'>, ToggleGroupItemBaseProps> {
}
export declare const ToggleGroupItem: ForwardRefExoticComponent<ToggleGroupItemProps & RefAttributes<HTMLButtonElement>>;
