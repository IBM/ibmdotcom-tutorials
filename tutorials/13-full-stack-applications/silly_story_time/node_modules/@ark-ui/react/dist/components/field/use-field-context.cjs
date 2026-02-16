'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [FieldProvider, useFieldContext] = createContext.createContext({
  name: "FieldContext",
  hookName: "useFieldContext",
  providerName: "<FieldProvider />",
  strict: false
});

exports.FieldProvider = FieldProvider;
exports.useFieldContext = useFieldContext;
