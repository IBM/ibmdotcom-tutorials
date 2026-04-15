import { HTMLProps, PolymorphicProps } from '../factory';
import { UseEditableReturn } from './use-editable';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseEditableReturn;
}
export interface EditableRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface EditableRootProviderProps extends HTMLProps<'div'>, EditableRootProviderBaseProps {
}
export declare const EditableRootProvider: ForwardRefExoticComponent<EditableRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
