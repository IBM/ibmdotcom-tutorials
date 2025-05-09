'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SplitterProvider, useSplitterContext] = createContext.createContext({
  name: "SplitterContext",
  hookName: "useSplitterContext",
  providerName: "<SplitterProvider />"
});

exports.SplitterProvider = SplitterProvider;
exports.useSplitterContext = useSplitterContext;
