'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useFileUploadContext } from './use-file-upload-context.js';

const FileUploadDropzone = forwardRef((props, ref) => {
  const [dropzoneProps, localProps] = createSplitProps()(props, ["disableClick"]);
  const fileUpload = useFileUploadContext();
  const mergedProps = mergeProps(fileUpload.getDropzoneProps(dropzoneProps), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
FileUploadDropzone.displayName = "FileUploadDropzone";

export { FileUploadDropzone };
