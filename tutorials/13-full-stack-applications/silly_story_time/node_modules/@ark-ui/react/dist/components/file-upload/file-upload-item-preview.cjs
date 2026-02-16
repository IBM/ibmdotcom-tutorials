'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFileUploadContext = require('./use-file-upload-context.cjs');
const useFileUploadItemPropsContext = require('./use-file-upload-item-props-context.cjs');

const FileUploadItemPreview = react.forwardRef((props, ref) => {
  const fileUpload = useFileUploadContext.useFileUploadContext();
  const itemProps = useFileUploadItemPropsContext.useFileUploadItemPropsContext();
  const mergedProps = react$1.mergeProps(fileUpload.getItemPreviewProps(itemProps), props);
  if (!itemProps.file.type.match(props.type ?? ".*")) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
FileUploadItemPreview.displayName = "FileUploadItemPreview";

exports.FileUploadItemPreview = FileUploadItemPreview;
