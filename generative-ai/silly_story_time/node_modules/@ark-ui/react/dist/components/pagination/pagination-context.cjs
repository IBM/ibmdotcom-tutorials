'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const usePaginationContext = require('./use-pagination-context.cjs');

const PaginationContext = (props) => props.children(usePaginationContext.usePaginationContext());

exports.PaginationContext = PaginationContext;
