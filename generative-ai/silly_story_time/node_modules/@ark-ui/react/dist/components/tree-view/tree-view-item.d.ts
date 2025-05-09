import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewItemBaseProps extends PolymorphicProps {
}
export interface TreeViewItemProps extends Assign<HTMLProps<'div'>, TreeViewItemBaseProps> {
}
export declare const TreeViewItem: ForwardRefExoticComponent<TreeViewItemProps & RefAttributes<HTMLDivElement>>;
