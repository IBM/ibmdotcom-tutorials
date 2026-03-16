'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useListboxContext } from './use-listbox-context.js';
import { ListboxItemProvider } from './use-listbox-item-context.js';
import { ListboxItemPropsProvider } from './use-listbox-item-props-context.js';

const ListboxItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["item", "highlightOnHover"]);
  const listbox = useListboxContext();
  const mergedProps = mergeProps(listbox.getItemProps(itemProps), localProps);
  const itemState = listbox.getItemState(itemProps);
  return /* @__PURE__ */ jsx(ListboxItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(ListboxItemProvider, { value: itemState, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
ListboxItem.displayName = "ListboxItem";

export { ListboxItem };
