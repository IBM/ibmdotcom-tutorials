'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { PinInputProvider } from './use-pin-input-context.js';

const PinInputRootProvider = forwardRef((props, ref) => {
  const [{ value: pinInput }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(pinInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(PinInputProvider, { value: pinInput, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
PinInputRootProvider.displayName = "PinInputRootProvider";

export { PinInputRootProvider };
