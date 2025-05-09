'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { NumberInputProvider } from './use-number-input-context.js';

const NumberInputRootProvider = forwardRef((props, ref) => {
  const [{ value: numberInput }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(numberInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(NumberInputProvider, { value: numberInput, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
NumberInputRootProvider.displayName = "NumberInputRootProvider";

export { NumberInputRootProvider };
