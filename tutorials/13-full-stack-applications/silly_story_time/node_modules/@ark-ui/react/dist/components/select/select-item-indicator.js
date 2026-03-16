'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';
import { useSelectItemPropsContext } from './use-select-item-props-context.js';

const SelectItemIndicator = forwardRef((props, ref) => {
  const select = useSelectContext();
  const itemProps = useSelectItemPropsContext();
  const mergedProps = mergeProps(select.getItemIndicatorProps(itemProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SelectItemIndicator.displayName = "SelectItemIndicator";

export { SelectItemIndicator };
