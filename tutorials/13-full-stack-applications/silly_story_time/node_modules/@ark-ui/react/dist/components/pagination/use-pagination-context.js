'use client';
import { createContext } from '../../utils/create-context.js';

const [PaginationProvider, usePaginationContext] = createContext({
  name: "PaginationContext",
  hookName: "usePaginationContext",
  providerName: "<PaginationProvider />"
});

export { PaginationProvider, usePaginationContext };
