'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePaginationContext } from './use-pagination-context.js';

const PaginationNextTrigger = forwardRef((props, ref) => {
  const pagination = usePaginationContext();
  const mergedProps = mergeProps(pagination.getNextTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
PaginationNextTrigger.displayName = "PaginationNextTrigger";

export { PaginationNextTrigger };
