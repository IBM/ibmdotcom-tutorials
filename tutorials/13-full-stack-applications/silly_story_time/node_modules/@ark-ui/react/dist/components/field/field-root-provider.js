'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { FieldProvider } from './use-field-context.js';

const FieldRootProvider = forwardRef((props, ref) => {
  const [{ value: field }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(field.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(FieldProvider, { value: field, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
FieldRootProvider.displayName = "FieldRootProvider";

export { FieldRootProvider };
