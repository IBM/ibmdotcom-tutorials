'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useFileUpload } from './use-file-upload.js';
import { FileUploadProvider } from './use-file-upload-context.js';

const FileUploadRoot = forwardRef((props, ref) => {
  const [useFileUploadProps, localProps] = createSplitProps()(props, [
    "accept",
    "allowDrop",
    "capture",
    "directory",
    "disabled",
    "id",
    "ids",
    "invalid",
    "locale",
    "maxFiles",
    "maxFileSize",
    "minFileSize",
    "name",
    "onFileAccept",
    "onFileChange",
    "onFileReject",
    "preventDocumentDrop",
    "required",
    "translations",
    "validate"
  ]);
  const fileUpload = useFileUpload(useFileUploadProps);
  const mergedProps = mergeProps(fileUpload.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(FileUploadProvider, { value: fileUpload, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
FileUploadRoot.displayName = "FileUploadRoot";

export { FileUploadRoot };
