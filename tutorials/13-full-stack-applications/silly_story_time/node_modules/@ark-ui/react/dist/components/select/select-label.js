'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';

const SelectLabel = forwardRef((props, ref) => {
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
SelectLabel.displayName = "SelectLabel";

export { SelectLabel };
