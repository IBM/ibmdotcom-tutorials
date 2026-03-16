'use client';
import { createContext } from '../../utils/create-context.js';

const [TreeViewNodePropsProvider, useTreeViewNodePropsContext] = createContext({
  name: "TreeViewNodePropsContext",
  hookName: "useTreeViewNodePropsContext",
  providerName: "<TreeViewItemProvider />"
});

export { TreeViewNodePropsProvider, useTreeViewNodePropsContext };
