import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewBranchTriggerBaseProps extends PolymorphicProps {
}
export interface TreeViewBranchTriggerProps extends HTMLProps<'div'>, TreeViewBranchTriggerBaseProps {
}
export declare const TreeViewBranchTrigger: ForwardRefExoticComponent<TreeViewBranchTriggerProps & RefAttributes<HTMLDivElement>>;
