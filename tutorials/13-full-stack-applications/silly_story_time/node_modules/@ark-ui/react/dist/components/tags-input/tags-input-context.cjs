'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTagsInputContext = require('./use-tags-input-context.cjs');

const TagsInputContext = (props) => props.children(useTagsInputContext.useTagsInputContext());

exports.TagsInputContext = TagsInputContext;
