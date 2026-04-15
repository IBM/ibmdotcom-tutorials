'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [EditableProvider, useEditableContext] = createContext.createContext({
  name: "EditableContext",
  hookName: "useEditableContext",
  providerName: "<EditableProvider />"
});

exports.EditableProvider = EditableProvider;
exports.useEditableContext = useEditableContext;
