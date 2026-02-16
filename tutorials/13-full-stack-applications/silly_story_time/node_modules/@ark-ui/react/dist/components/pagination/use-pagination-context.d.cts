import { UsePaginationReturn } from './use-pagination';
import { Provider } from 'react';
export interface UsePaginationContext extends UsePaginationReturn {
}
export declare const PaginationProvider: Provider<UsePaginationContext>, usePaginationContext: () => UsePaginationContext;
