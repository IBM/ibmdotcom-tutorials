import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewBranchIndentGuideBaseProps extends PolymorphicProps {
}
export interface TreeViewBranchIndentGuideProps extends HTMLProps<'div'>, TreeViewBranchIndentGuideBaseProps {
}
export declare const TreeViewBranchIndentGuide: ForwardRefExoticComponent<TreeViewBranchIndentGuideProps & RefAttributes<HTMLDivElement>>;
