'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTreeViewContext = require('./use-tree-view-context.cjs');
const useTreeViewNodePropsContext = require('./use-tree-view-node-props-context.cjs');

const TreeViewItemIndicator = react.forwardRef((props, ref) => {
  const treeView = useTreeViewContext.useTreeViewContext();
  const nodeProps = useTreeViewNodePropsContext.useTreeViewNodePropsContext();
  const mergedProps = react$1.mergeProps(treeView.getItemIndicatorProps(nodeProps), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
TreeViewItemIndicator.displayName = "TreeViewItemIndicator";

exports.TreeViewItemIndicator = TreeViewItemIndicator;
