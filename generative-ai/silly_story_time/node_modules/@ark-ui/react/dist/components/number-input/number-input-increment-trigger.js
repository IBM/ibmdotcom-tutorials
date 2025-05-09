'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useNumberInputContext } from './use-number-input-context.js';

const NumberInputIncrementTrigger = forwardRef(
  (props, ref) => {
    const numberInput = useNumberInputContext();
    const mergedProps = mergeProps(numberInput.getIncrementTriggerProps(), props);
    return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
  }
);
NumberInputIncrementTrigger.displayName = "NumberInputIncrementTrigger";

export { NumberInputIncrementTrigger };
