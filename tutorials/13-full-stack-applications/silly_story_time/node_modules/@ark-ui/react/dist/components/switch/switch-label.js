'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSwitchContext } from './use-switch-context.js';

const SwitchLabel = forwardRef((props, ref) => {
  const switchContext = useSwitchContext();
  const mergedProps = mergeProps(switchContext.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
SwitchLabel.displayName = "SwitchLabel";

export { SwitchLabel };
