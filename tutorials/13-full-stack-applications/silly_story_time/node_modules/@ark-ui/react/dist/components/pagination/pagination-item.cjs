'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const usePaginationContext = require('./use-pagination-context.cjs');

const PaginationItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["value", "type"]);
  const pagination = usePaginationContext.usePaginationContext();
  const mergedProps = react$1.mergeProps(pagination.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
PaginationItem.displayName = "PaginationItem";

exports.PaginationItem = PaginationItem;
