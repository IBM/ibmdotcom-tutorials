import { UseTreeViewNodeContext } from './use-tree-view-node-context';
import { ReactNode } from 'react';
export interface TreeViewNodeContextProps {
    children: (context: UseTreeViewNodeContext) => React.ReactNode;
}
export declare const TreeViewNodeContext: (props: TreeViewNodeContextProps) => ReactNode;
