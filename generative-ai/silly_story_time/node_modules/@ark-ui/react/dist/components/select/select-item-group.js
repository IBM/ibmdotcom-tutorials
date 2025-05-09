'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef, useId } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';
import { SelectItemGroupPropsProvider } from './use-select-item-group-props.js';

const SelectItemGroup = forwardRef((props, ref) => {
  const id = useId();
  const [_itemGroupProps, localProps] = createSplitProps()(props, ["id"]);
  const itemGroupProps = { id, ..._itemGroupProps };
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getItemGroupProps(itemGroupProps), localProps);
  return /* @__PURE__ */ jsx(SelectItemGroupPropsProvider, { value: itemGroupProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
SelectItemGroup.displayName = "SelectItemGroup";

export { SelectItemGroup };
