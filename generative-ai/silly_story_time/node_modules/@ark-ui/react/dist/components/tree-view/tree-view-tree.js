'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTreeViewContext } from './use-tree-view-context.js';

const TreeViewTree = forwardRef((props, ref) => {
  const treeView = useTreeViewContext();
  const mergedProps = mergeProps(treeView.getTreeProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TreeViewTree.displayName = "TreeViewTree";

export { TreeViewTree };
