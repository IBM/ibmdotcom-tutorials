'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useEditableContext } from './use-editable-context.js';

const EditableEditTrigger = forwardRef((props, ref) => {
  const editable = useEditableContext();
  const mergedProps = mergeProps(editable.getEditTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
EditableEditTrigger.displayName = "EditableEditTrigger";

export { EditableEditTrigger };
