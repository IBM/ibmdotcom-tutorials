'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useFileUploadContext } from './use-file-upload-context.js';

const FileUploadHiddenInput = forwardRef((props, ref) => {
  const fileUpload = useFileUploadContext();
  const mergedProps = mergeProps(fileUpload.getHiddenInputProps(), props);
  const field = useFieldContext();
  return /* @__PURE__ */ jsx(ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
FileUploadHiddenInput.displayName = "FileUploadHiddenInput";

export { FileUploadHiddenInput };
