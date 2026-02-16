'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useListboxContext } from './use-listbox-context.js';

const ListboxLabel = forwardRef((props, ref) => {
  const listbox = useListboxContext();
  const mergedProps = mergeProps(listbox.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
ListboxLabel.displayName = "ListboxLabel";

export { ListboxLabel };
