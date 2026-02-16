'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFileUploadContext = require('./use-file-upload-context.cjs');

const FileUploadTrigger = react.forwardRef((props, ref) => {
  const fileUpload = useFileUploadContext.useFileUploadContext();
  const mergedProps = react$1.mergeProps(fileUpload.getTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
FileUploadTrigger.displayName = "FileUploadTrigger";

exports.FileUploadTrigger = FileUploadTrigger;
