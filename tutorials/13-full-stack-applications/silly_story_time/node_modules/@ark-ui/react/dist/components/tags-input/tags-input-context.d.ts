import { ReactNode } from 'react';
import { UseTagsInputContext } from './use-tags-input-context';
export interface TagsInputContextProps {
    children: (context: UseTagsInputContext) => ReactNode;
}
export declare const TagsInputContext: (props: TagsInputContextProps) => ReactNode;
