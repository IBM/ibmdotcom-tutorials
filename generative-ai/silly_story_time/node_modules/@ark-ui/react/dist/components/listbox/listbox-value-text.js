'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useListboxContext } from './use-listbox-context.js';

const ListboxValueText = forwardRef((props, ref) => {
  const { children, placeholder, ...localprops } = props;
  const listbox = useListboxContext();
  const mergedProps = mergeProps(listbox.getValueTextProps(), localprops);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: children || listbox.valueAsString || placeholder });
});
ListboxValueText.displayName = "ListboxValueText";

export { ListboxValueText };
