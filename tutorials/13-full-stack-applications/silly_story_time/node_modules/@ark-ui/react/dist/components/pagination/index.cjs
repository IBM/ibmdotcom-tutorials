'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const paginationContext = require('./pagination-context.cjs');
const paginationEllipsis = require('./pagination-ellipsis.cjs');
const paginationItem = require('./pagination-item.cjs');
const paginationNextTrigger = require('./pagination-next-trigger.cjs');
const paginationPrevTrigger = require('./pagination-prev-trigger.cjs');
const paginationRoot = require('./pagination-root.cjs');
const paginationRootProvider = require('./pagination-root-provider.cjs');
const usePagination = require('./use-pagination.cjs');
const usePaginationContext = require('./use-pagination-context.cjs');
const pagination$1 = require('./pagination.cjs');
const pagination = require('@zag-js/pagination');



exports.PaginationContext = paginationContext.PaginationContext;
exports.PaginationEllipsis = paginationEllipsis.PaginationEllipsis;
exports.PaginationItem = paginationItem.PaginationItem;
exports.PaginationNextTrigger = paginationNextTrigger.PaginationNextTrigger;
exports.PaginationPrevTrigger = paginationPrevTrigger.PaginationPrevTrigger;
exports.PaginationRoot = paginationRoot.PaginationRoot;
exports.PaginationRootProvider = paginationRootProvider.PaginationRootProvider;
exports.usePagination = usePagination.usePagination;
exports.usePaginationContext = usePaginationContext.usePaginationContext;
exports.Pagination = pagination$1;
Object.defineProperty(exports, "paginationAnatomy", {
  enumerable: true,
  get: () => pagination.anatomy
});
