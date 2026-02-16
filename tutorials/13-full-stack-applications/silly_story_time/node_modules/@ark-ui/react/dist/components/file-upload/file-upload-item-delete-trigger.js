'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFileUploadContext } from './use-file-upload-context.js';
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context.js';

const FileUploadItemDeleteTrigger = forwardRef(
  (props, ref) => {
    const fileUpload = useFileUploadContext();
    const itemProps = useFileUploadItemPropsContext();
    const mergedProps = mergeProps(fileUpload.getItemDeleteTriggerProps(itemProps), props);
    return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
  }
);
FileUploadItemDeleteTrigger.displayName = "FileUploadItemDeleteTrigger";

export { FileUploadItemDeleteTrigger };
