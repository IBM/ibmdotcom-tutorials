import { ReactNode } from 'react';
import { UseToastContext } from './use-toast-context';
export interface ToastContextProps {
    children: (context: UseToastContext) => ReactNode;
}
export declare const ToastContext: (props: ToastContextProps) => ReactNode;
