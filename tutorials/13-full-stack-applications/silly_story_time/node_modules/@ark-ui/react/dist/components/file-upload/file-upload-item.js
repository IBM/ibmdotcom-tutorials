'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useFileUploadContext } from './use-file-upload-context.js';
import { FileUploadItemPropsProvider } from './use-file-upload-item-props-context.js';

const FileUploadItem = forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps()(props, ["file"]);
  const fileUpload = useFileUploadContext();
  const mergedProps = mergeProps(fileUpload.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsx(FileUploadItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsx(ark.li, { ...mergedProps, ref }) });
});
FileUploadItem.displayName = "FileUploadItem";

export { FileUploadItem };
