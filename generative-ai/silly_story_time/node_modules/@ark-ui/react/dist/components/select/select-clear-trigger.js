'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';

const SelectClearTrigger = forwardRef((props, ref) => {
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getClearTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
SelectClearTrigger.displayName = "SelectClearTrigger";

export { SelectClearTrigger };
