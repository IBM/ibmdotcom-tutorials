import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToastTitleBaseProps extends PolymorphicProps {
}
export interface ToastTitleProps extends HTMLProps<'div'>, ToastTitleBaseProps {
}
export declare const ToastTitle: ForwardRefExoticComponent<ToastTitleProps & RefAttributes<HTMLDivElement>>;
