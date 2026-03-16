'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { PaginationProvider } from './use-pagination-context.js';

const PaginationRootProvider = forwardRef((props, ref) => {
  const [{ value: pagination }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(pagination.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(PaginationProvider, { value: pagination, children: /* @__PURE__ */ jsx(ark.nav, { ...mergedProps, ref }) });
});
PaginationRootProvider.displayName = "PaginationRootProvider";

export { PaginationRootProvider };
