'use client';
import { useTagsInputItemContext } from './use-tags-input-item-context.js';

const TagsInputItemContext = (props) => props.children(useTagsInputItemContext());

export { TagsInputItemContext };
