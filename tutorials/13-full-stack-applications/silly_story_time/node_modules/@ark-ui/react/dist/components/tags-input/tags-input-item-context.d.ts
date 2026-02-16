import { ReactNode } from 'react';
import { UseTagsInputItemContext } from './use-tags-input-item-context';
export interface TagsInputItemContextProps {
    children: (context: UseTagsInputItemContext) => ReactNode;
}
export declare const TagsInputItemContext: (props: TagsInputItemContextProps) => ReactNode;
