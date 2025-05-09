'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const paginationContext = require('./pagination-context.cjs');
const paginationEllipsis = require('./pagination-ellipsis.cjs');
const paginationItem = require('./pagination-item.cjs');
const paginationNextTrigger = require('./pagination-next-trigger.cjs');
const paginationPrevTrigger = require('./pagination-prev-trigger.cjs');
const paginationRoot = require('./pagination-root.cjs');
const paginationRootProvider = require('./pagination-root-provider.cjs');



exports.Context = paginationContext.PaginationContext;
exports.Ellipsis = paginationEllipsis.PaginationEllipsis;
exports.Item = paginationItem.PaginationItem;
exports.NextTrigger = paginationNextTrigger.PaginationNextTrigger;
exports.PrevTrigger = paginationPrevTrigger.PaginationPrevTrigger;
exports.Root = paginationRoot.PaginationRoot;
exports.RootProvider = paginationRootProvider.PaginationRootProvider;
