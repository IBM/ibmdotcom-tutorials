'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { ToggleGroupProvider } from './use-toggle-group-context.js';

const ToggleGroupRootProvider = forwardRef((props, ref) => {
  const [{ value: toggleGroup }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(toggleGroup.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ToggleGroupProvider, { value: toggleGroup, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ToggleGroupRootProvider.displayName = "ToggleGroupRootProvider";

export { ToggleGroupRootProvider };
