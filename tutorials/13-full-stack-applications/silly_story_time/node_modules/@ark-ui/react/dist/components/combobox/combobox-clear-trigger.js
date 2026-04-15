'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';

const ComboboxClearTrigger = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const mergedProps = mergeProps(combobox.getClearTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
ComboboxClearTrigger.displayName = "ComboboxClearTrigger";

export { ComboboxClearTrigger };
