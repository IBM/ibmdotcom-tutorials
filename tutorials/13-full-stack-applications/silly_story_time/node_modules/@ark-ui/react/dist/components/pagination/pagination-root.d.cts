import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePaginationProps } from './use-pagination';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PaginationRootBaseProps extends UsePaginationProps, PolymorphicProps {
}
export interface PaginationRootProps extends HTMLProps<'nav'>, PaginationRootBaseProps {
}
export declare const PaginationRoot: ForwardRefExoticComponent<PaginationRootProps & RefAttributes<HTMLElement>>;
