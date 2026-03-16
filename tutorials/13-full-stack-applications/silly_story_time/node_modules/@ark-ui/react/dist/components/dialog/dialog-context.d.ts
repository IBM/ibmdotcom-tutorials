import { ReactNode } from 'react';
import { UseDialogContext } from './use-dialog-context';
export interface DialogContextProps {
    children: (context: UseDialogContext) => ReactNode;
}
export declare const DialogContext: (props: DialogContextProps) => ReactNode;
