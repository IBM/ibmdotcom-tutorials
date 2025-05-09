'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { usePaginationContext } from './use-pagination-context.js';

const PaginationEllipsis = forwardRef((props, ref) => {
  const [ellipsisProps, localProps] = createSplitProps()(props, ["index"]);
  const pagination = usePaginationContext();
  const mergedProps = mergeProps(pagination.getEllipsisProps(ellipsisProps), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
PaginationEllipsis.displayName = "PaginationEllipsis";

export { PaginationEllipsis };
