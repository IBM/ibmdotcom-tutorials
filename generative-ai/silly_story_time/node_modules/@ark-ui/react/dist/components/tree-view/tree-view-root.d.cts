import { JSX } from 'react';
import { RenderStrategyProps } from '../../utils/render-strategy';
import { TreeNode } from '../collection';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseTreeViewProps } from './use-tree-view';
export interface TreeViewRootBaseProps<T extends TreeNode> extends UseTreeViewProps<T>, RenderStrategyProps, PolymorphicProps {
}
export interface TreeViewRootProps<T extends TreeNode> extends HTMLProps<'div'>, TreeViewRootBaseProps<T> {
}
export type TreeViewComponent = <T extends TreeNode>(props: TreeViewRootProps<T> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
export declare const TreeViewRoot: TreeViewComponent;
