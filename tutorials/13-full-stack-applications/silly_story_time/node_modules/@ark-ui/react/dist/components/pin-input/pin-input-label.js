'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePinInputContext } from './use-pin-input-context.js';

const PinInputLabel = forwardRef((props, ref) => {
  const pinInput = usePinInputContext();
  const mergedProps = mergeProps(pinInput.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
PinInputLabel.displayName = "PinInputLabel";

export { PinInputLabel };
