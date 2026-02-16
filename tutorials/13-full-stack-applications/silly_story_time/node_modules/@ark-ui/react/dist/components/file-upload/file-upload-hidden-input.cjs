'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useFileUploadContext = require('./use-file-upload-context.cjs');

const FileUploadHiddenInput = react.forwardRef((props, ref) => {
  const fileUpload = useFileUploadContext.useFileUploadContext();
  const mergedProps = react$1.mergeProps(fileUpload.getHiddenInputProps(), props);
  const field = useFieldContext.useFieldContext();
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref });
});
FileUploadHiddenInput.displayName = "FileUploadHiddenInput";

exports.FileUploadHiddenInput = FileUploadHiddenInput;
