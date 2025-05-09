'use client';
import { createContext } from '../../utils/create-context.js';

const [EditableProvider, useEditableContext] = createContext({
  name: "EditableContext",
  hookName: "useEditableContext",
  providerName: "<EditableProvider />"
});

export { EditableProvider, useEditableContext };
