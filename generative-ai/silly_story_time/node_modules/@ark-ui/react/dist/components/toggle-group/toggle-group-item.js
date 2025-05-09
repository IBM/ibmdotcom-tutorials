'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useToggleGroupContext } from './use-toggle-group-context.js';

const ToggleGroupItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["value", "disabled"]);
  const toggleGroup = useToggleGroupContext();
  const mergedProps = mergeProps(toggleGroup.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroupItem };
