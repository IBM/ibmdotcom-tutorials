'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldsetContext } from './use-fieldset-context.js';

const FieldsetLegend = forwardRef((props, ref) => {
  const fieldset = useFieldsetContext();
  const mergedProps = mergeProps(fieldset.getLegendProps(), props);
  return /* @__PURE__ */ jsx(ark.legend, { ...mergedProps, ref });
});
FieldsetLegend.displayName = "FieldsetLegend";

export { FieldsetLegend };
