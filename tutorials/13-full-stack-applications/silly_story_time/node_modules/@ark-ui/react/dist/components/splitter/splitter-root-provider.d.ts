import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSplitterReturn } from './use-splitter';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseSplitterReturn;
}
export interface SplitterRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface SplitterRootProviderProps extends HTMLProps<'div'>, SplitterRootProviderBaseProps {
}
export declare const SplitterRootProvider: ForwardRefExoticComponent<SplitterRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
