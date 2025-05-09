'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTreeViewContext = require('./use-tree-view-context.cjs');

const TreeViewContext = (props) => props.children(useTreeViewContext.useTreeViewContext());

exports.TreeViewContext = TreeViewContext;
