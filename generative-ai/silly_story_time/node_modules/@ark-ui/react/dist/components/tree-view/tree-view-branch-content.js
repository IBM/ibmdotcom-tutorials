'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { CollapsibleContent } from '../collapsible/collapsible-content.js';
import { useTreeViewContext } from './use-tree-view-context.js';
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context.js';

const splitVisibilityProps = createSplitProps();
const TreeViewBranchContent = forwardRef((props, ref) => {
  const treeView = useTreeViewContext();
  const nodeProps = useTreeViewNodePropsContext();
  const contentProps = treeView.getBranchContentProps(nodeProps);
  const [, branchContentProps] = splitVisibilityProps(contentProps, ["hidden", "data-state"]);
  const mergedProps = mergeProps(branchContentProps, props);
  return /* @__PURE__ */ jsx(CollapsibleContent, { ref, ...mergedProps });
});
TreeViewBranchContent.displayName = "TreeViewBranchContent";

export { TreeViewBranchContent };
