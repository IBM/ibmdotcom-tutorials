'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { usePagination } from './use-pagination.js';
import { PaginationProvider } from './use-pagination-context.js';

const PaginationRoot = forwardRef((props, ref) => {
  const [paginationProps, localProps] = createSplitProps()(props, [
    "count",
    "defaultPage",
    "defaultPageSize",
    "id",
    "ids",
    "onPageChange",
    "onPageSizeChange",
    "page",
    "pageSize",
    "siblingCount",
    "translations",
    "type"
  ]);
  const pagination = usePagination(paginationProps);
  const mergedProps = mergeProps(pagination.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(PaginationProvider, { value: pagination, children: /* @__PURE__ */ jsx(ark.nav, { ...mergedProps, ref }) });
});
PaginationRoot.displayName = "PaginationRoot";

export { PaginationRoot };
