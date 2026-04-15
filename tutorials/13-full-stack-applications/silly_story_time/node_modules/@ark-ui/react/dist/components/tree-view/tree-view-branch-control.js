'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useTreeViewContext } from './use-tree-view-context.js';
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context.js';

const TreeViewBranchControl = forwardRef((props, ref) => {
  const treeView = useTreeViewContext();
  const nodeProps = useTreeViewNodePropsContext();
  const mergedProps = mergeProps(treeView.getBranchControlProps(nodeProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
TreeViewBranchControl.displayName = "TreeViewBranchControl";

export { TreeViewBranchControl };
