'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TooltipProvider, useTooltipContext] = createContext.createContext({
  name: "TooltipContext",
  hookName: "useTooltipContext",
  providerName: "<TooltipProvider />"
});

exports.TooltipProvider = TooltipProvider;
exports.useTooltipContext = useTooltipContext;
