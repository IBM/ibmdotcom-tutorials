import { HTMLProps, PolymorphicProps } from '../factory';
import { UseRadioGroupReturn } from './use-radio-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseRadioGroupReturn;
}
export interface RadioGroupRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface RadioGroupRootProviderProps extends HTMLProps<'div'>, RadioGroupRootProviderBaseProps {
}
export declare const RadioGroupRootProvider: ForwardRefExoticComponent<RadioGroupRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
