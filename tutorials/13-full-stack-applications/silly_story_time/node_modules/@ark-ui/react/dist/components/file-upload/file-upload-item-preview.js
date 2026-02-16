'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFileUploadContext } from './use-file-upload-context.js';
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context.js';

const FileUploadItemPreview = forwardRef((props, ref) => {
  const fileUpload = useFileUploadContext();
  const itemProps = useFileUploadItemPropsContext();
  const mergedProps = mergeProps(fileUpload.getItemPreviewProps(itemProps), props);
  if (!itemProps.file.type.match(props.type ?? ".*")) return null;
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
FileUploadItemPreview.displayName = "FileUploadItemPreview";

export { FileUploadItemPreview };
