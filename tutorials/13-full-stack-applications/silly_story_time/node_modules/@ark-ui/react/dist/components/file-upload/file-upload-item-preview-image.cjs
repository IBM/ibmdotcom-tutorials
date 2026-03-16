'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFileUploadContext = require('./use-file-upload-context.cjs');
const useFileUploadItemPropsContext = require('./use-file-upload-item-props-context.cjs');

const FileUploadItemPreviewImage = react.forwardRef(
  (props, ref) => {
    const [url, setUrl] = react.useState("");
    const fileUpload = useFileUploadContext.useFileUploadContext();
    const itemProps = useFileUploadItemPropsContext.useFileUploadItemPropsContext();
    const mergedProps = react$1.mergeProps(fileUpload.getItemPreviewImageProps({ ...itemProps, url }), props);
    react.useEffect(() => {
      return fileUpload.createFileUrl(itemProps.file, (url2) => setUrl(url2));
    }, [itemProps, fileUpload]);
    if (!url) return null;
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.img, { ...mergedProps, ref });
  }
);
FileUploadItemPreviewImage.displayName = "FileUploadItemPreviewImage";

exports.FileUploadItemPreviewImage = FileUploadItemPreviewImage;
