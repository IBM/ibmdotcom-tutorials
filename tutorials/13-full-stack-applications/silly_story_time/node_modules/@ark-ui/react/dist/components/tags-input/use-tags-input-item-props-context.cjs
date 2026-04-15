'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TagsInputItemPropsProvider, useTagsInputItemPropsContext] = createContext.createContext({
  name: "TagsInputItemPropsContext",
  hookName: "useTagsInputItemPropsContext",
  providerName: "<TagsInputItemPropsProvider />"
});

exports.TagsInputItemPropsProvider = TagsInputItemPropsProvider;
exports.useTagsInputItemPropsContext = useTagsInputItemPropsContext;
