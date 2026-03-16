import { HTMLProps, PolymorphicProps } from '../factory';
import { UseTagsInputReturn } from './use-tags-input';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseTagsInputReturn;
}
export interface TagsInputRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface TagsInputRootProviderProps extends HTMLProps<'div'>, TagsInputRootProviderBaseProps {
}
export declare const TagsInputRootProvider: ForwardRefExoticComponent<TagsInputRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
