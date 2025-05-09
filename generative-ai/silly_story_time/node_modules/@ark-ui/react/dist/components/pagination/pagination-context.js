'use client';
import { usePaginationContext } from './use-pagination-context.js';

const PaginationContext = (props) => props.children(usePaginationContext());

export { PaginationContext };
