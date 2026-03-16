import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputLabelBaseProps extends PolymorphicProps {
}
export interface TagsInputLabelProps extends HTMLProps<'label'>, TagsInputLabelBaseProps {
}
export declare const TagsInputLabel: ForwardRefExoticComponent<TagsInputLabelProps & RefAttributes<HTMLLabelElement>>;
