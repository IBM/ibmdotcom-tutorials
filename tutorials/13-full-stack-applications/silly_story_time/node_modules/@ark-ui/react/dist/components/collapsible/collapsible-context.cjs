'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useCollapsibleContext = require('./use-collapsible-context.cjs');

const CollapsibleContext = (props) => props.children(useCollapsibleContext.useCollapsibleContext());

exports.CollapsibleContext = CollapsibleContext;
