'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFileUploadContext = require('./use-file-upload-context.cjs');

const FileUploadRootProvider = react.forwardRef((props, ref) => {
  const [{ value: fileUpload }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(fileUpload.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useFileUploadContext.FileUploadProvider, { value: fileUpload, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
FileUploadRootProvider.displayName = "FileUploadRootProvider";

exports.FileUploadRootProvider = FileUploadRootProvider;
