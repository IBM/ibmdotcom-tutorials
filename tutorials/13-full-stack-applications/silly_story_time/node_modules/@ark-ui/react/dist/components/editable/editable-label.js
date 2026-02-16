'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useEditableContext } from './use-editable-context.js';

const EditableLabel = forwardRef((props, ref) => {
  const editable = useEditableContext();
  const mergedProps = mergeProps(editable.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
EditableLabel.displayName = "EditableLabel";

export { EditableLabel };
