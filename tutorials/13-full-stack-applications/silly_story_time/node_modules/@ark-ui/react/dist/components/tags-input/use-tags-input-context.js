'use client';
import { createContext } from '../../utils/create-context.js';

const [TagsInputProvider, useTagsInputContext] = createContext({
  name: "TagsInputContext",
  hookName: "useTagsInputContext",
  providerName: "<TagsInputProvider />"
});

export { TagsInputProvider, useTagsInputContext };
