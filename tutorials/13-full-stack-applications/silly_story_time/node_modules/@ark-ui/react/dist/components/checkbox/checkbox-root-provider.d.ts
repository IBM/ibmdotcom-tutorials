import { HTMLProps, PolymorphicProps } from '../factory';
import { UseCheckboxReturn } from './use-checkbox';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseCheckboxReturn;
}
export interface CheckboxRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface CheckboxRootProviderProps extends HTMLProps<'label'>, CheckboxRootProviderBaseProps {
}
export declare const CheckboxRootProvider: ForwardRefExoticComponent<CheckboxRootProviderProps & RefAttributes<HTMLLabelElement>>;
export {};
