'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSelectContext } from './use-select-context.js';

const SelectValueText = forwardRef((props, ref) => {
  const { children, placeholder, ...localprops } = props;
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getValueTextProps(), localprops);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: children || select.valueAsString || placeholder });
});
SelectValueText.displayName = "SelectValueText";

export { SelectValueText };
