import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputControlBaseProps extends PolymorphicProps {
}
export interface TagsInputControlProps extends HTMLProps<'div'>, TagsInputControlBaseProps {
}
export declare const TagsInputControl: ForwardRefExoticComponent<TagsInputControlProps & RefAttributes<HTMLDivElement>>;
