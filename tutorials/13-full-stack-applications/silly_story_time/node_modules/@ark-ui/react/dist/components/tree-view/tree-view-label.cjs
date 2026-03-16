'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useTreeViewContext = require('./use-tree-view-context.cjs');

const TreeViewLabel = react.forwardRef((props, ref) => {
  const treeView = useTreeViewContext.useTreeViewContext();
  const mergedProps = react$1.mergeProps(treeView.getLabelProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref });
});
TreeViewLabel.displayName = "TreeViewLabel";

exports.TreeViewLabel = TreeViewLabel;
