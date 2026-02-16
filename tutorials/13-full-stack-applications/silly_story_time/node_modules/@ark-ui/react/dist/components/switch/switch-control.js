'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSwitchContext } from './use-switch-context.js';

const SwitchControl = forwardRef((props, ref) => {
  const switchContext = useSwitchContext();
  const mergedProps = mergeProps(switchContext.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
SwitchControl.displayName = "SwitchControl";

export { SwitchControl };
