import { HTMLProps, PolymorphicProps } from '../factory';
import { UseProgressReturn } from './use-progress';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseProgressReturn;
}
export interface ProgressRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface ProgressRootProviderProps extends HTMLProps<'div'>, ProgressRootProviderBaseProps {
}
export declare const ProgressRootProvider: ForwardRefExoticComponent<ProgressRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
