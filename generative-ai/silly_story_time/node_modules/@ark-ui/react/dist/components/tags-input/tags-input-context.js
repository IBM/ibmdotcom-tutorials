'use client';
import { useTagsInputContext } from './use-tags-input-context.js';

const TagsInputContext = (props) => props.children(useTagsInputContext());

export { TagsInputContext };
