'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [PopoverProvider, usePopoverContext] = createContext.createContext({
  name: "PopoverContext",
  hookName: "usePopoverContext",
  providerName: "<PopoverProvider />"
});

exports.PopoverProvider = PopoverProvider;
exports.usePopoverContext = usePopoverContext;
