'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useToggleGroup } from './use-toggle-group.js';
import { ToggleGroupProvider } from './use-toggle-group-context.js';

const ToggleGroupRoot = forwardRef((props, ref) => {
  const [useToggleGroupProps, localProps] = createSplitProps()(props, [
    "defaultValue",
    "deselectable",
    "disabled",
    "id",
    "ids",
    "loopFocus",
    "multiple",
    "onValueChange",
    "orientation",
    "rovingFocus",
    "value"
  ]);
  const togglegroup = useToggleGroup(useToggleGroupProps);
  const mergedProps = mergeProps(togglegroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ToggleGroupProvider, { value: togglegroup, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ToggleGroupRoot.displayName = "ToggleGroupRoot";

export { ToggleGroupRoot };
