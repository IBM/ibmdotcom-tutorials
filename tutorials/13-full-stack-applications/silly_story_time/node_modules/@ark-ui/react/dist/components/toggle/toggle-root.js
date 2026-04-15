'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useToggle } from './use-toggle.js';
import { ToggleProvider } from './use-toggle-context.js';

const ToggleRoot = forwardRef((props, ref) => {
  const [useToggleProps, localProps] = createSplitProps()(props, [
    "pressed",
    "defaultPressed",
    "disabled",
    "onPressedChange"
  ]);
  const toggle = useToggle(useToggleProps);
  const mergedProps = mergeProps(toggle.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ToggleProvider, { value: toggle, children: /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref }) });
});
ToggleRoot.displayName = "ToggleRoot";

export { ToggleRoot };
