'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFileUploadContext = require('./use-file-upload-context.cjs');
const useFileUploadItemPropsContext = require('./use-file-upload-item-props-context.cjs');

const FileUploadItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["file"]);
  const fileUpload = useFileUploadContext.useFileUploadContext();
  const mergedProps = react$1.mergeProps(fileUpload.getItemProps(itemProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useFileUploadItemPropsContext.FileUploadItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.li, { ...mergedProps, ref }) });
});
FileUploadItem.displayName = "FileUploadItem";

exports.FileUploadItem = FileUploadItem;
