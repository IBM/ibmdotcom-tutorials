'use client';
import { useTreeViewContext } from './use-tree-view-context.js';

const TreeViewContext = (props) => props.children(useTreeViewContext());

export { TreeViewContext };
