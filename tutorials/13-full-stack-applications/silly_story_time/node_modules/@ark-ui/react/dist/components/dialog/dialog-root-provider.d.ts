import { ReactNode } from 'react';
import { PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseDialogReturn } from './use-dialog';
interface RootProviderProps {
    value: UseDialogReturn;
}
export interface DialogRootProviderBaseProps extends RootProviderProps, UsePresenceProps, PolymorphicProps {
}
export interface DialogRootProviderProps extends DialogRootProviderBaseProps {
    children?: ReactNode;
}
export declare const DialogRootProvider: (props: DialogRootProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
