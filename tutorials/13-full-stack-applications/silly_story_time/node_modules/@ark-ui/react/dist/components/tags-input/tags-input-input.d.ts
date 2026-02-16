import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputInputBaseProps extends PolymorphicProps {
}
export interface TagsInputInputProps extends HTMLProps<'input'>, TagsInputInputBaseProps {
}
export declare const TagsInputInput: ForwardRefExoticComponent<TagsInputInputProps & RefAttributes<HTMLInputElement>>;
