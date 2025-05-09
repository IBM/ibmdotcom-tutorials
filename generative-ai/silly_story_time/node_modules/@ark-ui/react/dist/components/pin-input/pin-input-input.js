'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { usePinInputContext } from './use-pin-input-context.js';

const PinInputInput = forwardRef((props, ref) => {
  const [inputProps, localProps] = createSplitProps()(props, ["index"]);
  const pinInput = usePinInputContext();
  const mergedProps = mergeProps(pinInput.getInputProps(inputProps), localProps);
  return /* @__PURE__ */ jsx(ark.input, { ...mergedProps, ref });
});
PinInputInput.displayName = "PinInputInput";

export { PinInputInput };
