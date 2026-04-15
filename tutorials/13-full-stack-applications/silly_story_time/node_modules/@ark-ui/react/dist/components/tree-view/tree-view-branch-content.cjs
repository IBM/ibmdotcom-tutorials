'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const collapsibleContent = require('../collapsible/collapsible-content.cjs');
const useTreeViewContext = require('./use-tree-view-context.cjs');
const useTreeViewNodePropsContext = require('./use-tree-view-node-props-context.cjs');

const splitVisibilityProps = createSplitProps.createSplitProps();
const TreeViewBranchContent = react.forwardRef((props, ref) => {
  const treeView = useTreeViewContext.useTreeViewContext();
  const nodeProps = useTreeViewNodePropsContext.useTreeViewNodePropsContext();
  const contentProps = treeView.getBranchContentProps(nodeProps);
  const [, branchContentProps] = splitVisibilityProps(contentProps, ["hidden", "data-state"]);
  const mergedProps = react$1.mergeProps(branchContentProps, props);
  return /* @__PURE__ */ jsxRuntime.jsx(collapsibleContent.CollapsibleContent, { ref, ...mergedProps });
});
TreeViewBranchContent.displayName = "TreeViewBranchContent";

exports.TreeViewBranchContent = TreeViewBranchContent;
