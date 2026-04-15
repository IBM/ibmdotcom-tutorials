'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useToggleContext } from './use-toggle-context.js';

const ToggleIndicator = forwardRef((props, ref) => {
  const { children, fallback, ...restProps } = props;
  const toggle = useToggleContext();
  const mergedProps = mergeProps(toggle.getIndicatorProps(), restProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref, children: toggle.pressed ? children : fallback });
});
ToggleIndicator.displayName = "ToggleIndicator";

export { ToggleIndicator };
