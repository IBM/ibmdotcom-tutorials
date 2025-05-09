'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';
import { SelectItemProvider } from './use-select-item-context.js';
import { SelectItemPropsProvider } from './use-select-item-props-context.js';

const SelectItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["item", "persistFocus"]);
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getItemProps(itemProps), localProps);
  const itemState = select.getItemState(itemProps);
  return /* @__PURE__ */ jsx(SelectItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(SelectItemProvider, { value: itemState, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
SelectItem.displayName = "SelectItem";

export { SelectItem };
