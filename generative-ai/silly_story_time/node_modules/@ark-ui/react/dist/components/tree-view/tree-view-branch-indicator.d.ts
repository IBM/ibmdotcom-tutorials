import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewBranchIndicatorBaseProps extends PolymorphicProps {
}
export interface TreeViewBranchIndicatorProps extends HTMLProps<'div'>, TreeViewBranchIndicatorBaseProps {
}
export declare const TreeViewBranchIndicator: ForwardRefExoticComponent<TreeViewBranchIndicatorProps & RefAttributes<HTMLDivElement>>;
