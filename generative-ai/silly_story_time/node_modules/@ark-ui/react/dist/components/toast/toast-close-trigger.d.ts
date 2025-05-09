import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToastCloseTriggerBaseProps extends PolymorphicProps {
}
export interface ToastCloseTriggerProps extends HTMLProps<'button'>, ToastCloseTriggerBaseProps {
}
export declare const ToastCloseTrigger: ForwardRefExoticComponent<ToastCloseTriggerProps & RefAttributes<HTMLButtonElement>>;
