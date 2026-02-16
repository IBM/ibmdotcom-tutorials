import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DialogTriggerBaseProps extends PolymorphicProps {
}
export interface DialogTriggerProps extends HTMLProps<'button'>, DialogTriggerBaseProps {
}
export declare const DialogTrigger: ForwardRefExoticComponent<DialogTriggerProps & RefAttributes<HTMLButtonElement>>;
