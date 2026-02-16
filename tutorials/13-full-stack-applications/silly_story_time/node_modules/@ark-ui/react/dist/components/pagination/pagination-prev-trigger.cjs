'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePaginationContext = require('./use-pagination-context.cjs');

const PaginationPrevTrigger = react.forwardRef((props, ref) => {
  const pagination = usePaginationContext.usePaginationContext();
  const mergedProps = react$1.mergeProps(pagination.getPrevTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
PaginationPrevTrigger.displayName = "PaginationPrevTrigger";

exports.PaginationPrevTrigger = PaginationPrevTrigger;
