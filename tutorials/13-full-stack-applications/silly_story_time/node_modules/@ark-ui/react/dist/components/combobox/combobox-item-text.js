'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';
import { useComboboxItemPropsContext } from './use-combobox-item-props-context.js';

const ComboboxItemText = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const itemProps = useComboboxItemPropsContext();
  const mergedProps = mergeProps(combobox.getItemTextProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
ComboboxItemText.displayName = "ComboboxItemText";

export { ComboboxItemText };
