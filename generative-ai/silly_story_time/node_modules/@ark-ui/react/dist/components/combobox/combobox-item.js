'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';
import { ComboboxItemProvider } from './use-combobox-item-context.js';
import { ComboboxItemPropsProvider } from './use-combobox-item-props-context.js';

const ComboboxItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["item", "persistFocus"]);
  const combobox = useComboboxContext();
  const mergedProps = mergeProps(combobox.getItemProps(itemProps), localProps);
  const itemState = combobox.getItemState(itemProps);
  return /* @__PURE__ */ jsx(ComboboxItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(ComboboxItemProvider, { value: itemState, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
ComboboxItem.displayName = "ComboboxItem";

export { ComboboxItem };
