import { TreeNode } from '../collection';
import { UseTreeViewContext } from './use-tree-view-context';
import { ReactNode } from 'react';
export interface TreeViewContextProps<T extends TreeNode> {
    children: (context: UseTreeViewContext<T>) => React.ReactNode;
}
export declare const TreeViewContext: <T extends TreeNode>(props: TreeViewContextProps<T>) => ReactNode;
