'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useField } from './use-field.js';
import { FieldProvider } from './use-field-context.js';

const FieldRoot = forwardRef((props, ref) => {
  const [useFieldProps, localProps] = createSplitProps()(props, [
    "id",
    "ids",
    "disabled",
    "invalid",
    "readOnly",
    "required"
  ]);
  const field = useField(useFieldProps);
  const mergedProps = mergeProps(field.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(FieldProvider, { value: field, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(ref, field.refs.rootRef) }) });
});
FieldRoot.displayName = "FieldRoot";

export { FieldRoot };
