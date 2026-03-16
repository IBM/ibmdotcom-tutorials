"use strict";
'use strict';

var pagination = require('./pagination.cjs');
var pagination$1 = require('@ark-ui/react/pagination');
var namespace = require('./namespace.cjs');



exports.PaginationContext = pagination.PaginationContext;
exports.PaginationEllipsis = pagination.PaginationEllipsis;
exports.PaginationItem = pagination.PaginationItem;
exports.PaginationItems = pagination.PaginationItems;
exports.PaginationNextTrigger = pagination.PaginationNextTrigger;
exports.PaginationPageText = pagination.PaginationPageText;
exports.PaginationPrevTrigger = pagination.PaginationPrevTrigger;
exports.PaginationPropsProvider = pagination.PaginationPropsProvider;
exports.PaginationRoot = pagination.PaginationRoot;
exports.PaginationRootProvider = pagination.PaginationRootProvider;
exports.usePaginationStyles = pagination.usePaginationStyles;
Object.defineProperty(exports, "usePagination", {
  enumerable: true,
  get: function () { return pagination$1.usePagination; }
});
Object.defineProperty(exports, "usePaginationContext", {
  enumerable: true,
  get: function () { return pagination$1.usePaginationContext; }
});
exports.Pagination = namespace;
