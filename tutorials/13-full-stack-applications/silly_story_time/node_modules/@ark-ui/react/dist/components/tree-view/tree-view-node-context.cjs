'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTreeViewNodeContext = require('./use-tree-view-node-context.cjs');

const TreeViewNodeContext = (props) => props.children(useTreeViewNodeContext.useTreeViewNodeContext());

exports.TreeViewNodeContext = TreeViewNodeContext;
