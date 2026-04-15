import { HTMLProps, PolymorphicProps } from '../factory';
import { UseCollapsibleReturn } from './use-collapsible';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseCollapsibleReturn;
}
export interface CollapsibleRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface CollapsibleRootProviderProps extends HTMLProps<'div'>, CollapsibleRootProviderBaseProps {
}
export declare const CollapsibleRootProvider: ForwardRefExoticComponent<CollapsibleRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
