import { HTMLProps, PolymorphicProps } from '../factory';
import { UseFieldsetReturn } from './use-fieldset';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseFieldsetReturn;
}
export interface FieldsetRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface FieldsetRootProviderProps extends HTMLProps<'fieldset'>, FieldsetRootProviderBaseProps {
}
export declare const FieldsetRootProvider: ForwardRefExoticComponent<FieldsetRootProviderProps & RefAttributes<HTMLFieldSetElement>>;
export {};
