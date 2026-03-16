'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFileUploadContext = require('./use-file-upload-context.cjs');
const useFileUploadItemPropsContext = require('./use-file-upload-item-props-context.cjs');

const FileUploadItemSizeText = react.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const fileUpload = useFileUploadContext.useFileUploadContext();
  const itemProps = useFileUploadItemPropsContext.useFileUploadItemPropsContext();
  const mergedProps = react$1.mergeProps(fileUpload.getItemSizeTextProps(itemProps), rest);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref, children: children || fileUpload.getFileSize(itemProps.file) });
});
FileUploadItemSizeText.displayName = "FileUploadItemSizeText";

exports.FileUploadItemSizeText = FileUploadItemSizeText;
