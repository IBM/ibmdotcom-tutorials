import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseDialogProps } from './use-dialog';
export interface DialogRootBaseProps extends UseDialogProps, UsePresenceProps {
}
export interface DialogRootProps extends DialogRootBaseProps {
    children?: ReactNode;
}
export declare const DialogRoot: (props: DialogRootProps) => import("react/jsx-runtime").JSX.Element;
