import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToastRootBaseProps extends PolymorphicProps {
}
export interface ToastRootProps extends HTMLProps<'div'>, ToastRootBaseProps {
}
export declare const ToastRoot: ForwardRefExoticComponent<ToastRootProps & RefAttributes<HTMLDivElement>>;
