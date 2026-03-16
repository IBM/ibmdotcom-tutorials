import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import { TreeCollection, TreeNode } from '../collection';
import * as treeView from '@zag-js/tree-view';
export interface UseTreeViewProps<T extends TreeNode> extends Optional<Omit<treeView.Props, 'dir' | 'getRootNode' | 'collection'>, 'id'> {
    /**
     * The collection of tree nodes
     */
    collection: TreeCollection<T>;
}
export interface UseTreeViewReturn<T extends TreeNode> extends treeView.Api<PropTypes, T> {
}
export declare const useTreeView: <T extends TreeNode>(props: UseTreeViewProps<T>) => UseTreeViewReturn<T>;
