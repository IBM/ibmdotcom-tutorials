import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToastActionTriggerBaseProps extends PolymorphicProps {
}
export interface ToastActionTriggerProps extends HTMLProps<'button'>, ToastActionTriggerBaseProps {
}
export declare const ToastActionTrigger: ForwardRefExoticComponent<ToastActionTriggerProps & RefAttributes<HTMLButtonElement>>;
