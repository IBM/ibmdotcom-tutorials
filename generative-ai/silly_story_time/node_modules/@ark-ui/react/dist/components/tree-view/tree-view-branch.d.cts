import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewBranchBaseProps extends PolymorphicProps {
}
export interface TreeViewBranchProps extends Assign<HTMLProps<'div'>, TreeViewBranchBaseProps> {
}
export declare const TreeViewBranch: ForwardRefExoticComponent<TreeViewBranchProps & RefAttributes<HTMLDivElement>>;
