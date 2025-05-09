'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const usePagination = require('./use-pagination.cjs');
const usePaginationContext = require('./use-pagination-context.cjs');

const PaginationRoot = react.forwardRef((props, ref) => {
  const [paginationProps, localProps] = createSplitProps.createSplitProps()(props, [
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
  const pagination = usePagination.usePagination(paginationProps);
  const mergedProps = react$1.mergeProps(pagination.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(usePaginationContext.PaginationProvider, { value: pagination, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.nav, { ...mergedProps, ref }) });
});
PaginationRoot.displayName = "PaginationRoot";

exports.PaginationRoot = PaginationRoot;
