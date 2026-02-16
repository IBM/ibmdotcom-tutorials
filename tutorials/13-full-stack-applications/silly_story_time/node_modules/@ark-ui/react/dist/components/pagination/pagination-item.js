'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { usePaginationContext } from './use-pagination-context.js';

const PaginationItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["value", "type"]);
  const pagination = usePaginationContext();
  const mergedProps = mergeProps(pagination.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
PaginationItem.displayName = "PaginationItem";

export { PaginationItem };
