'use client';
import { useTreeViewNodeContext } from './use-tree-view-node-context.js';

const TreeViewNodeContext = (props) => props.children(useTreeViewNodeContext());

export { TreeViewNodeContext };
