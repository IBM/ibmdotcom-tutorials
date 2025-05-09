'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFileUploadContext } from './use-file-upload-context.js';

const FileUploadLabel = forwardRef((props, ref) => {
  const fileUpload = useFileUploadContext();
  const mergedProps = mergeProps(fileUpload.getLabelProps(), props);
  return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
});
FileUploadLabel.displayName = "FileUploadLabel";

export { FileUploadLabel };
