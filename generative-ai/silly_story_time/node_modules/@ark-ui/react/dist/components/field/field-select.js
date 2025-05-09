'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from './use-field-context.js';

const FieldSelect = forwardRef((props, ref) => {
  const field = useFieldContext();
  const mergedProps = mergeProps(field?.getSelectProps(), props);
  return /* @__PURE__ */ jsx(ark.select, { ...mergedProps, ref });
});
FieldSelect.displayName = "FieldSelect";

export { FieldSelect };
