'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTabsContext = require('./use-tabs-context.cjs');

const TabsContext = (props) => props.children(useTabsContext.useTabsContext());

exports.TabsContext = TabsContext;
