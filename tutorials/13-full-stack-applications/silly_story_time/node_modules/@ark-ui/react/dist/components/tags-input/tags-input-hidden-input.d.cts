import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputHiddenInputBaseProps extends PolymorphicProps {
}
export interface TagsInputHiddenInputProps extends HTMLProps<'input'>, TagsInputHiddenInputBaseProps {
}
export declare const TagsInputHiddenInput: ForwardRefExoticComponent<TagsInputHiddenInputProps & RefAttributes<HTMLInputElement>>;
