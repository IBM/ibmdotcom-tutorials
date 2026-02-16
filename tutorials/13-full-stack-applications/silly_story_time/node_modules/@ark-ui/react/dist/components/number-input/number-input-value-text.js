'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useNumberInputContext } from './use-number-input-context.js';

const NumberInputValueText = forwardRef((props, ref) => {
  const { children, ...localProps } = props;
  const numberInput = useNumberInputContext();
  const mergedProps = mergeProps(numberInput.getValueTextProps(), localProps);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: children || numberInput.value });
});
NumberInputValueText.displayName = "NumberInputValueText";

export { NumberInputValueText };
