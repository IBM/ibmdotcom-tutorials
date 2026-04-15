'use client';
import { createContext } from '../../utils/create-context.js';

const [FieldsetProvider, useFieldsetContext] = createContext({
  name: "FieldsetContext",
  hookName: "useFieldsetContext",
  providerName: "<FieldsetProvider />",
  strict: false
});

export { FieldsetProvider, useFieldsetContext };
