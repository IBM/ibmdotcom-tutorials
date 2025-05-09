'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TagsInputProvider, useTagsInputContext] = createContext.createContext({
  name: "TagsInputContext",
  hookName: "useTagsInputContext",
  providerName: "<TagsInputProvider />"
});

exports.TagsInputProvider = TagsInputProvider;
exports.useTagsInputContext = useTagsInputContext;
