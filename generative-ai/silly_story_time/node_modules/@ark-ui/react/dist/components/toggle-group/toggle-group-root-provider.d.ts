import { HTMLProps, PolymorphicProps } from '../factory';
import { UseToggleGroupReturn } from './use-toggle-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseToggleGroupReturn;
}
export interface ToggleGroupRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface ToggleGroupRootProviderProps extends HTMLProps<'div'>, ToggleGroupRootProviderBaseProps {
}
export declare const ToggleGroupRootProvider: ForwardRefExoticComponent<ToggleGroupRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
