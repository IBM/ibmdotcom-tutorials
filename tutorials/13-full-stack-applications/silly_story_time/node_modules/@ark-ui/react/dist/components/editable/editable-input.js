'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useEditableContext } from './use-editable-context.js';

const EditableInput = forwardRef((props, ref) => {
  const editable = useEditableContext();
  const mergedProps = mergeProps(editable.getInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
EditableInput.displayName = "EditableInput";

export { EditableInput };
