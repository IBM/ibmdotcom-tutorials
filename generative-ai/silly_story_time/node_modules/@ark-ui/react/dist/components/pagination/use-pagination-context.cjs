'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [PaginationProvider, usePaginationContext] = createContext.createContext({
  name: "PaginationContext",
  hookName: "usePaginationContext",
  providerName: "<PaginationProvider />"
});

exports.PaginationProvider = PaginationProvider;
exports.usePaginationContext = usePaginationContext;
