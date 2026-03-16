import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewBranchContentBaseProps extends PolymorphicProps {
}
export interface TreeViewBranchContentProps extends HTMLProps<'div'>, TreeViewBranchContentBaseProps {
}
export declare const TreeViewBranchContent: ForwardRefExoticComponent<TreeViewBranchContentProps & RefAttributes<HTMLDivElement>>;
