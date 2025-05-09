'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePaginationContext } from './use-pagination-context.js';

const PaginationPrevTrigger = forwardRef((props, ref) => {
  const pagination = usePaginationContext();
  const mergedProps = mergeProps(pagination.getPrevTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
PaginationPrevTrigger.displayName = "PaginationPrevTrigger";

export { PaginationPrevTrigger };
