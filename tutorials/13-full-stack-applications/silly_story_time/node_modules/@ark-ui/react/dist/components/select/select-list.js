'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';

const SelectList = forwardRef((props, ref) => {
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getListProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SelectList.displayName = "SelectList";

export { SelectList };
