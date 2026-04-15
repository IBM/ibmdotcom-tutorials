'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';

const SelectControl = forwardRef((props, ref) => {
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SelectControl.displayName = "SelectControl";

export { SelectControl };
