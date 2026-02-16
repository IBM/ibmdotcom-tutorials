'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';
import { useSelectItemGroupPropsContext } from './use-select-item-group-props.js';

const SelectItemGroupLabel = forwardRef((props, ref) => {
  const select = useSelectContext();
  const itemGroupProps = useSelectItemGroupPropsContext();
  const mergedProps = mergeProps(select.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
SelectItemGroupLabel.displayName = "SelectItemGroupLabel";

export { SelectItemGroupLabel };
