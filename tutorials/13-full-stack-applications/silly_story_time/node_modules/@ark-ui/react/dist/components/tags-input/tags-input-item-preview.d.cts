import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputItemPreviewBaseProps extends PolymorphicProps {
}
export interface TagsInputItemPreviewProps extends HTMLProps<'div'>, TagsInputItemPreviewBaseProps {
}
export declare const TagsInputItemPreview: ForwardRefExoticComponent<TagsInputItemPreviewProps & RefAttributes<HTMLDivElement>>;
