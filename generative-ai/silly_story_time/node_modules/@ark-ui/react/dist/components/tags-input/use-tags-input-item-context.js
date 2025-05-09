'use client';
import { createContext } from '../../utils/create-context.js';

const [TagsInputItemProvider, useTagsInputItemContext] = createContext({
  name: "TagsInputItemContext",
  hookName: "useTagsInputItemContext",
  providerName: "<TagsInputItemProvider />"
});

export { TagsInputItemProvider, useTagsInputItemContext };
