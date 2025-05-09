'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useEditableContext } from './use-editable-context.js';

const EditablePreview = forwardRef((props, ref) => {
  const editable = useEditableContext();
  const mergedProps = mergeProps(editable.getPreviewProps(), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
EditablePreview.displayName = "EditablePreview";

export { EditablePreview };
