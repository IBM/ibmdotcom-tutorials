'use client';
import { createContext } from '../../utils/create-context.js';

const [TreeViewProvider, useTreeViewContext] = createContext({
  name: "TreeViewContext",
  hookName: "useTreeViewContext",
  providerName: "<TreeViewProvider />"
});

export { TreeViewProvider, useTreeViewContext };
