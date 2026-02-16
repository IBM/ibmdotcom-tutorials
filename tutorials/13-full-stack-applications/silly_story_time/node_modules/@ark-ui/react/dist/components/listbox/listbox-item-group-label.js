'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useListboxContext } from './use-listbox-context.js';
import { useListboxItemGroupPropsContext } from './use-listbox-item-group-props.js';

const ListboxItemGroupLabel = forwardRef((props, ref) => {
  const listbox = useListboxContext();
  const itemGroupProps = useListboxItemGroupPropsContext();
  const mergedProps = mergeProps(listbox.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ListboxItemGroupLabel.displayName = "ListboxItemGroupLabel";

export { ListboxItemGroupLabel };
