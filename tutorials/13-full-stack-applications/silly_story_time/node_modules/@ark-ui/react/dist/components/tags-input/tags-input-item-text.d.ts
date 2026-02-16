import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputItemTextBaseProps extends PolymorphicProps {
}
export interface TagsInputItemTextProps extends HTMLProps<'span'>, TagsInputItemTextBaseProps {
}
export declare const TagsInputItemText: ForwardRefExoticComponent<TagsInputItemTextProps & RefAttributes<HTMLSpanElement>>;
