import { ItemProps } from '@zag-js/tags-input';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface TagsInputItemProps extends HTMLProps<'div'>, TagsInputItemBaseProps {
}
export declare const TagsInputItem: ForwardRefExoticComponent<TagsInputItemProps & RefAttributes<HTMLDivElement>>;
