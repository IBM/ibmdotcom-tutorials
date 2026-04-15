'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';

const ComboboxLabel = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const mergedProps = mergeProps(combobox.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
ComboboxLabel.displayName = "ComboboxLabel";

export { ComboboxLabel };
