import { HTMLProps, PolymorphicProps } from '../factory';
import { UseFieldReturn } from './use-field';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseFieldReturn;
}
export interface FieldRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface FieldRootProviderProps extends HTMLProps<'div'>, FieldRootProviderBaseProps {
}
export declare const FieldRootProvider: ForwardRefExoticComponent<FieldRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
