'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePinInputContext } from './use-pin-input-context.js';

const PinInputControl = forwardRef((props, ref) => {
  const pinInput = usePinInputContext();
  const mergedProps = mergeProps(pinInput.getControlProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
PinInputControl.displayName = "PinInputControl";

export { PinInputControl };
