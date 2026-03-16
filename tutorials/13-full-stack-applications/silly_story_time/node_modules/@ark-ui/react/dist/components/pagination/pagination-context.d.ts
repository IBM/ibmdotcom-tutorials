import { ReactNode } from 'react';
import { UsePaginationContext } from './use-pagination-context';
export interface PaginationContextProps {
    children: (context: UsePaginationContext) => ReactNode;
}
export declare const PaginationContext: (props: PaginationContextProps) => ReactNode;
