'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';
import { useSelectItemPropsContext } from './use-select-item-props-context.js';

const SelectItemText = forwardRef((props, ref) => {
  const select = useSelectContext();
  const itemProps = useSelectItemPropsContext();
  const mergedProps = mergeProps(select.getItemTextProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
SelectItemText.displayName = "SelectItemText";

export { SelectItemText };
