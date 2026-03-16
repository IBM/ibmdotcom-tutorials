import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewBranchControlBaseProps extends PolymorphicProps {
}
export interface TreeViewBranchControlProps extends HTMLProps<'div'>, TreeViewBranchControlBaseProps {
}
export declare const TreeViewBranchControl: ForwardRefExoticComponent<TreeViewBranchControlProps & RefAttributes<HTMLDivElement>>;
