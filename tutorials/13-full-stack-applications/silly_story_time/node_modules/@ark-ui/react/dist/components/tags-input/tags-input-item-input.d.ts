import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputItemInputBaseProps extends PolymorphicProps {
}
export interface TagsInputItemInputProps extends HTMLProps<'input'>, TagsInputItemInputBaseProps {
}
export declare const TagsInputItemInput: ForwardRefExoticComponent<TagsInputItemInputProps & RefAttributes<HTMLInputElement>>;
