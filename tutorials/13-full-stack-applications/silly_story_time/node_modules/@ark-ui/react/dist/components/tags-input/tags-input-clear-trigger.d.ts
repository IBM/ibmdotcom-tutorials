import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TagsInputClearTriggerBaseProps extends PolymorphicProps {
}
export interface TagsInputClearTriggerProps extends HTMLProps<'button'>, TagsInputClearTriggerBaseProps {
}
export declare const TagsInputClearTrigger: ForwardRefExoticComponent<TagsInputClearTriggerProps & RefAttributes<HTMLButtonElement>>;
