'use client';
import { createContext } from '../../utils/create-context.js';

const [FieldProvider, useFieldContext] = createContext({
  name: "FieldContext",
  hookName: "useFieldContext",
  providerName: "<FieldProvider />",
  strict: false
});

export { FieldProvider, useFieldContext };
