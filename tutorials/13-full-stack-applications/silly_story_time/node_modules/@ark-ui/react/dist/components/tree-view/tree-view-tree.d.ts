import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewTreeBaseProps extends PolymorphicProps {
}
export interface TreeViewTreeProps extends HTMLProps<'div'>, TreeViewTreeBaseProps {
}
export declare const TreeViewTree: ForwardRefExoticComponent<TreeViewTreeProps & RefAttributes<HTMLDivElement>>;
