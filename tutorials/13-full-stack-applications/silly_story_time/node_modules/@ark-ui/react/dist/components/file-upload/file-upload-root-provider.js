'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { FileUploadProvider } from './use-file-upload-context.js';

const FileUploadRootProvider = forwardRef((props, ref) => {
  const [{ value: fileUpload }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(fileUpload.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(FileUploadProvider, { value: fileUpload, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
FileUploadRootProvider.displayName = "FileUploadRootProvider";

export { FileUploadRootProvider };
