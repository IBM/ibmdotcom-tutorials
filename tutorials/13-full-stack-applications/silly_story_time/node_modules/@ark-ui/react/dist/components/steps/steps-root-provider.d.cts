import { HTMLProps, PolymorphicProps } from '../factory';
import { UseStepsReturn } from './use-steps';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseStepsReturn;
}
export interface StepsRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface StepsRootProviderProps extends HTMLProps<'div'>, StepsRootProviderBaseProps {
}
export declare const StepsRootProvider: ForwardRefExoticComponent<StepsRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
