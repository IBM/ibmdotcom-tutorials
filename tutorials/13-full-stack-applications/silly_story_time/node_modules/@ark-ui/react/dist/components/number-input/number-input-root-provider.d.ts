import { HTMLProps, PolymorphicProps } from '../factory';
import { UseNumberInputReturn } from './use-number-input';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseNumberInputReturn;
}
export interface NumberInputRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface NumberInputRootProviderProps extends HTMLProps<'div'>, NumberInputRootProviderBaseProps {
}
export declare const NumberInputRootProvider: ForwardRefExoticComponent<NumberInputRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
