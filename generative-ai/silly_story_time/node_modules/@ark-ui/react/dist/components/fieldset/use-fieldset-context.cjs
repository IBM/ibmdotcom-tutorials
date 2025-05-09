'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [FieldsetProvider, useFieldsetContext] = createContext.createContext({
  name: "FieldsetContext",
  hookName: "useFieldsetContext",
  providerName: "<FieldsetProvider />",
  strict: false
});

exports.FieldsetProvider = FieldsetProvider;
exports.useFieldsetContext = useFieldsetContext;
