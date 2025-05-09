import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverTriggerBaseProps extends PolymorphicProps {
}
export interface PopoverTriggerProps extends HTMLProps<'button'>, PopoverTriggerBaseProps {
}
export declare const PopoverTrigger: ForwardRefExoticComponent<PopoverTriggerProps & RefAttributes<HTMLButtonElement>>;
