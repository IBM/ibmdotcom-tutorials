import { TreeNode } from '../collection';
import { UseTreeViewReturn } from './use-tree-view';
import { Provider } from 'react';
export interface UseTreeViewContext<T extends TreeNode> extends UseTreeViewReturn<T> {
}
export declare const TreeViewProvider: Provider<UseTreeViewContext<any>>, useTreeViewContext: () => UseTreeViewContext<any>;
