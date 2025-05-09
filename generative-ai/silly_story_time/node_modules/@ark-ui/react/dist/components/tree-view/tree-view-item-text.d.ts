import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewItemTextBaseProps extends PolymorphicProps {
}
export interface TreeViewItemTextProps extends HTMLProps<'span'>, TreeViewItemTextBaseProps {
}
export declare const TreeViewItemText: ForwardRefExoticComponent<TreeViewItemTextProps & RefAttributes<HTMLSpanElement>>;
