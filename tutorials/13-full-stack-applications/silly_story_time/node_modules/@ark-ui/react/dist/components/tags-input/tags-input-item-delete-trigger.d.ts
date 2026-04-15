import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputItemDeleteTriggerBaseProps extends PolymorphicProps {
}
export interface TagsInputItemDeleteTriggerProps extends HTMLProps<'button'>, TagsInputItemDeleteTriggerBaseProps {
}
export declare const TagsInputItemDeleteTrigger: ForwardRefExoticComponent<TagsInputItemDeleteTriggerProps & RefAttributes<HTMLButtonElement>>;
