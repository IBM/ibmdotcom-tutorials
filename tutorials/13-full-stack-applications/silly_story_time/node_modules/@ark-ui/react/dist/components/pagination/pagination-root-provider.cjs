'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const usePaginationContext = require('./use-pagination-context.cjs');

const PaginationRootProvider = react.forwardRef((props, ref) => {
  const [{ value: pagination }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(pagination.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(usePaginationContext.PaginationProvider, { value: pagination, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.nav, { ...mergedProps, ref }) });
});
PaginationRootProvider.displayName = "PaginationRootProvider";

exports.PaginationRootProvider = PaginationRootProvider;
