import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSwitchReturn } from './use-switch';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseSwitchReturn;
}
export interface SwitchRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface SwitchRootProviderProps extends HTMLProps<'label'>, SwitchRootProviderBaseProps {
}
export declare const SwitchRootProvider: ForwardRefExoticComponent<SwitchRootProviderProps & RefAttributes<HTMLLabelElement>>;
export {};
