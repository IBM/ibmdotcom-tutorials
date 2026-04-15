'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useListboxContext } from './use-listbox-context.js';

const ListboxContent = forwardRef((props, ref) => {
  const listbox = useListboxContext();
  const mergedProps = mergeProps(listbox.getContentProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ListboxContent.displayName = "ListboxContent";

export { ListboxContent };
