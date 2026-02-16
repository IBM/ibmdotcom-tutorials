'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef, useId } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';
import { ComboboxItemGroupPropsProvider } from './use-combobox-item-group-props-context.js';

const ComboboxItemGroup = forwardRef((props, ref) => {
  const id = useId();
  const [_itemGroupProps, localProps] = createSplitProps()(props, ["id"]);
  const itemGroupProps = { id, ..._itemGroupProps };
  const combobox = useComboboxContext();
  const mergedProps = mergeProps(combobox.getItemGroupProps(itemGroupProps), localProps);
  return /* @__PURE__ */ jsx(ComboboxItemGroupPropsProvider, { value: itemGroupProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ComboboxItemGroup.displayName = "ComboboxItemGroup";

export { ComboboxItemGroup };
