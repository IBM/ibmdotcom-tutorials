'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFileUploadContext } from './use-file-upload-context.js';
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context.js';

const FileUploadItemName = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const fileUpload = useFileUploadContext();
  const itemProps = useFileUploadItemPropsContext();
  const mergedProps = mergeProps(fileUpload.getItemNameProps(itemProps), rest);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref, children: children || itemProps.file.name });
});
FileUploadItemName.displayName = "FileUploadItemName";

export { FileUploadItemName };
