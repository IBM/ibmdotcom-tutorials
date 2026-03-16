'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useListboxContext } from './use-listbox-context.js';
import { useListboxItemPropsContext } from './use-listbox-item-props-context.js';

const ListboxItemText = forwardRef((props, ref) => {
  const listbox = useListboxContext();
  const itemProps = useListboxItemPropsContext();
  const mergedProps = mergeProps(listbox.getItemTextProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ListboxItemText.displayName = "ListboxItemText";

export { ListboxItemText };
