import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseTagsInputProps } from './use-tags-input';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputRootBaseProps extends UseTagsInputProps, PolymorphicProps {
}
export interface TagsInputRootProps extends Assign<HTMLProps<'div'>, TagsInputRootBaseProps> {
}
export declare const TagsInputRoot: ForwardRefExoticComponent<TagsInputRootProps & RefAttributes<HTMLDivElement>>;
