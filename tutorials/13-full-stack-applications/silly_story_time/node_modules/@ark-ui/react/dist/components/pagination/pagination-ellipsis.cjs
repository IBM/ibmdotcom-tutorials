'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const usePaginationContext = require('./use-pagination-context.cjs');

const PaginationEllipsis = react.forwardRef((props, ref) => {
  const [ellipsisProps, localProps] = createSplitProps.createSplitProps()(props, ["index"]);
  const pagination = usePaginationContext.usePaginationContext();
  const mergedProps = react$1.mergeProps(pagination.getEllipsisProps(ellipsisProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
PaginationEllipsis.displayName = "PaginationEllipsis";

exports.PaginationEllipsis = PaginationEllipsis;
