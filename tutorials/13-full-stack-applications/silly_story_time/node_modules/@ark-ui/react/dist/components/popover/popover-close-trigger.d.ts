import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverCloseTriggerBaseProps extends PolymorphicProps {
}
export interface PopoverCloseTriggerProps extends HTMLProps<'button'>, PopoverCloseTriggerBaseProps {
}
export declare const PopoverCloseTrigger: ForwardRefExoticComponent<PopoverCloseTriggerProps & RefAttributes<HTMLButtonElement>>;
