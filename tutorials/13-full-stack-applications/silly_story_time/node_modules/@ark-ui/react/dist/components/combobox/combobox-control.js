'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';

const ComboboxControl = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const mergedProps = mergeProps(combobox.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ComboboxControl.displayName = "ComboboxControl";

export { ComboboxControl };
