import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewBranchTextBaseProps extends PolymorphicProps {
}
export interface TreeViewBranchTextProps extends HTMLProps<'span'>, TreeViewBranchTextBaseProps {
}
export declare const TreeViewBranchText: ForwardRefExoticComponent<TreeViewBranchTextProps & RefAttributes<HTMLSpanElement>>;
