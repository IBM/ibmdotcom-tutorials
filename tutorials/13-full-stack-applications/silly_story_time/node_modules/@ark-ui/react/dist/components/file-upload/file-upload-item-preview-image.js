'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef, useState, useEffect } from 'react';
import { ark } from '../factory.js';
import { useFileUploadContext } from './use-file-upload-context.js';
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context.js';

const FileUploadItemPreviewImage = forwardRef(
  (props, ref) => {
    const [url, setUrl] = useState("");
    const fileUpload = useFileUploadContext();
    const itemProps = useFileUploadItemPropsContext();
    const mergedProps = mergeProps(fileUpload.getItemPreviewImageProps({ ...itemProps, url }), props);
    useEffect(() => {
      return fileUpload.createFileUrl(itemProps.file, (url2) => setUrl(url2));
    }, [itemProps, fileUpload]);
    if (!url) return null;
    return /* @__PURE__ */ jsx(ark.img, { ...mergedProps, ref });
  }
);
FileUploadItemPreviewImage.displayName = "FileUploadItemPreviewImage";

export { FileUploadItemPreviewImage };
