'use client';
import { createContext } from '../../utils/create-context.js';

const [TagsInputItemPropsProvider, useTagsInputItemPropsContext] = createContext({
  name: "TagsInputItemPropsContext",
  hookName: "useTagsInputItemPropsContext",
  providerName: "<TagsInputItemPropsProvider />"
});

export { TagsInputItemPropsProvider, useTagsInputItemPropsContext };
