'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFileUploadContext = require('./use-file-upload-context.cjs');

const FileUploadDropzone = react.forwardRef((props, ref) => {
  const [dropzoneProps, localProps] = createSplitProps.createSplitProps()(props, ["disableClick"]);
  const fileUpload = useFileUploadContext.useFileUploadContext();
  const mergedProps = react$1.mergeProps(fileUpload.getDropzoneProps(dropzoneProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
FileUploadDropzone.displayName = "FileUploadDropzone";

exports.FileUploadDropzone = FileUploadDropzone;
