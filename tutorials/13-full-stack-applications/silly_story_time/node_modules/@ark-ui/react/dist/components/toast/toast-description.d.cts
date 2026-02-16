import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToastDescriptionBaseProps extends PolymorphicProps {
}
export interface ToastDescriptionProps extends HTMLProps<'div'>, ToastDescriptionBaseProps {
}
export declare const ToastDescription: ForwardRefExoticComponent<ToastDescriptionProps & RefAttributes<HTMLDivElement>>;
