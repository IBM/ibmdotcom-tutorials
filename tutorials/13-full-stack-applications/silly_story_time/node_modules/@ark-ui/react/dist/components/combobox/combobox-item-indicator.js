'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';
import { useComboboxItemPropsContext } from './use-combobox-item-props-context.js';

const ComboboxItemIndicator = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const itemProps = useComboboxItemPropsContext();
  const mergedProps = mergeProps(combobox.getItemIndicatorProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ComboboxItemIndicator.displayName = "ComboboxItemIndicator";

export { ComboboxItemIndicator };
