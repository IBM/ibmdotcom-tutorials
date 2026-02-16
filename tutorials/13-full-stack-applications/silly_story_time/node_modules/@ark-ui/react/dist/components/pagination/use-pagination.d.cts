import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as pagination from '@zag-js/pagination';
export interface UsePaginationProps extends Optional<Omit<pagination.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UsePaginationReturn extends pagination.Api<PropTypes> {
}
export declare const usePagination: (props?: UsePaginationProps) => UsePaginationReturn;
