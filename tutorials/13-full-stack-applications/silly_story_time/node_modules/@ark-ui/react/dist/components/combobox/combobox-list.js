'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';

const ComboboxList = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const mergedProps = mergeProps(combobox.getListProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ComboboxList.displayName = "ComboboxList";

export { ComboboxList };
