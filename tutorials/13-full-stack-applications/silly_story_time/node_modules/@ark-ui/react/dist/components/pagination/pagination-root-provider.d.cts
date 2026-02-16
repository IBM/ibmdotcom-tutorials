import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePaginationReturn } from './use-pagination';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UsePaginationReturn;
}
export interface PaginationRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface PaginationRootProviderProps extends HTMLProps<'nav'>, PaginationRootProviderBaseProps {
}
export declare const PaginationRootProvider: ForwardRefExoticComponent<PaginationRootProviderProps & RefAttributes<HTMLElement>>;
export {};
