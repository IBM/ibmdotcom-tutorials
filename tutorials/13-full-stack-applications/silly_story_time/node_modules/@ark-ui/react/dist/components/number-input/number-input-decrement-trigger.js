'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useNumberInputContext } from './use-number-input-context.js';

const NumberInputDecrementTrigger = forwardRef(
  (props, ref) => {
    const numberInput = useNumberInputContext();
    const mergedProps = mergeProps(numberInput.getDecrementTriggerProps(), props);
    return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
  }
);
NumberInputDecrementTrigger.displayName = "NumberInputDecrementTrigger";

export { NumberInputDecrementTrigger };
