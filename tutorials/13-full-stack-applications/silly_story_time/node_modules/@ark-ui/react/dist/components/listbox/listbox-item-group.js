'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef, useId } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useListboxContext } from './use-listbox-context.js';
import { ListboxItemGroupPropsProvider } from './use-listbox-item-group-props.js';

const ListboxItemGroup = forwardRef((props, ref) => {
  const id = useId();
  const [_itemGroupProps, localProps] = createSplitProps()(props, ["id"]);
  const itemGroupProps = { id, ..._itemGroupProps };
  const listbox = useListboxContext();
  const mergedProps = mergeProps(listbox.getItemGroupProps(itemGroupProps), localProps);
  return /* @__PURE__ */ jsx(ListboxItemGroupPropsProvider, { value: itemGroupProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ListboxItemGroup.displayName = "ListboxItemGroup";

export { ListboxItemGroup };
