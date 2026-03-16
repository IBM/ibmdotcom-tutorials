'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TagsInputItemProvider, useTagsInputItemContext] = createContext.createContext({
  name: "TagsInputItemContext",
  hookName: "useTagsInputItemContext",
  providerName: "<TagsInputItemProvider />"
});

exports.TagsInputItemProvider = TagsInputItemProvider;
exports.useTagsInputItemContext = useTagsInputItemContext;
