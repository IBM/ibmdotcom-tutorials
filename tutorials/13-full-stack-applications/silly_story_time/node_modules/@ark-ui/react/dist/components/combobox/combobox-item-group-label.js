'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useComboboxContext } from './use-combobox-context.js';
import { useComboboxItemGroupPropsContext } from './use-combobox-item-group-props-context.js';

const ComboboxItemGroupLabel = forwardRef((props, ref) => {
  const combobox = useComboboxContext();
  const itemGroupProps = useComboboxItemGroupPropsContext();
  const mergedProps = mergeProps(combobox.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ComboboxItemGroupLabel.displayName = "ComboboxItemGroupLabel";

export { ComboboxItemGroupLabel };
