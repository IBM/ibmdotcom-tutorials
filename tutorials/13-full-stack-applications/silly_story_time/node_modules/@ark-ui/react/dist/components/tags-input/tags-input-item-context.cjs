'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTagsInputItemContext = require('./use-tags-input-item-context.cjs');

const TagsInputItemContext = (props) => props.children(useTagsInputItemContext.useTagsInputItemContext());

exports.TagsInputItemContext = TagsInputItemContext;
