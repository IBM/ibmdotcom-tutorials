'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useSplitterContext = require('./use-splitter-context.cjs');

const SplitterContext = (props) => props.children(useSplitterContext.useSplitterContext());

exports.SplitterContext = SplitterContext;
