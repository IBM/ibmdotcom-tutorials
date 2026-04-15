'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSwitchContext } from './use-switch-context.js';

const SwitchThumb = forwardRef((props, ref) => {
  const switchContext = useSwitchContext();
  const mergedProps = mergeProps(switchContext.getThumbProps(), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
SwitchThumb.displayName = "SwitchThumb";

export { SwitchThumb };
