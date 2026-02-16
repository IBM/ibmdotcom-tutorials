"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var fileUpload = require('@ark-ui/react/file-upload');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');
var span = require('../box/span.cjs');
var _for = require('../for/for.cjs');

const {
  withProvider,
  withContext,
  useStyles: useFileUploadStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "fileUpload" });
const FileUploadRootProvider = withProvider(fileUpload.FileUpload.RootProvider, "root", { forwardAsChild: true });
const FileUploadRoot = withProvider(
  fileUpload.FileUpload.Root,
  "root",
  { forwardAsChild: true }
);
const FileUploadPropsProvider = PropsProvider;
const FileUploadClearTrigger = withContext(fileUpload.FileUpload.ClearTrigger, "clearTrigger", { forwardAsChild: true });
const FileUploadDropzone = withContext(fileUpload.FileUpload.Dropzone, "dropzone", { forwardAsChild: true });
const FileUploadDropzoneContent = withContext("div", "dropzoneContent");
const FileUploadItem = withContext(
  fileUpload.FileUpload.Item,
  "item",
  { forwardAsChild: true }
);
const FileUploadItemContent = withContext("div", "itemContent");
const FileUploadItemDeleteTrigger = withContext(fileUpload.FileUpload.ItemDeleteTrigger, "itemDeleteTrigger", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.CloseIcon, {})
  }
});
const FileUploadItemGroup = withContext(fileUpload.FileUpload.ItemGroup, "itemGroup", { forwardAsChild: true });
const FileUploadItemName = withContext(fileUpload.FileUpload.ItemName, "itemName", { forwardAsChild: true });
const FileUploadItemPreview = withContext(fileUpload.FileUpload.ItemPreview, "itemPreview", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.FileIcon, {})
  }
});
const FileUploadItemPreviewImage = withContext(fileUpload.FileUpload.ItemPreviewImage, "itemPreviewImage", { forwardAsChild: true });
const FileUploadItemSizeText = withContext(fileUpload.FileUpload.ItemSizeText, "itemSizeText", { forwardAsChild: true });
const FileUploadLabel = withContext(fileUpload.FileUpload.Label, "label", { forwardAsChild: true });
const FileUploadTrigger = withContext(fileUpload.FileUpload.Trigger, "trigger", { forwardAsChild: true });
const FileUploadItems = (props) => {
  const { showSize, clearable, files, ...rest } = props;
  const fileUpload$1 = fileUpload.useFileUploadContext();
  const acceptedFiles = files ?? fileUpload$1.acceptedFiles;
  return /* @__PURE__ */ jsxRuntime.jsx(_for.For, { each: acceptedFiles, children: (file) => /* @__PURE__ */ jsxRuntime.jsxs(FileUploadItem, { file, ...rest, children: [
    /* @__PURE__ */ jsxRuntime.jsx(FileUploadItemPreview, {}),
    showSize ? /* @__PURE__ */ jsxRuntime.jsxs(FileUploadItemContent, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(FileUploadItemName, {}),
      /* @__PURE__ */ jsxRuntime.jsx(FileUploadItemSizeText, {})
    ] }) : /* @__PURE__ */ jsxRuntime.jsx(FileUploadItemName, { flex: "1" }),
    clearable && /* @__PURE__ */ jsxRuntime.jsx(FileUploadItemDeleteTrigger, {})
  ] }, file.name) });
};
const FileUploadList = React.forwardRef(
  function FileUploadList2(props, ref) {
    const { showSize, clearable, files, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(FileUploadItemGroup, { ref, ...rest, children: /* @__PURE__ */ jsxRuntime.jsx(
      FileUploadItems,
      {
        showSize,
        clearable,
        files
      }
    ) });
  }
);
const FileUploadFileText = React.forwardRef(function FileUploadFileText2(props, ref) {
  const { fallback = "Select file(s)", ...rest } = props;
  const fileUpload$1 = fileUpload.useFileUploadContext();
  const styles = useFileUploadStyles();
  const acceptedFiles = fileUpload$1.acceptedFiles;
  const fileText = React.useMemo(() => {
    if (acceptedFiles.length === 1) {
      return acceptedFiles[0].name;
    }
    if (acceptedFiles.length > 1) {
      return `${acceptedFiles.length} files`;
    }
    return fallback;
  }, [acceptedFiles, fallback]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    span.Span,
    {
      ref,
      "data-placeholder": fileText === fallback ? "" : void 0,
      ...rest,
      css: [styles.fileText, props.css],
      children: fileText
    }
  );
});
const FileUploadContext = fileUpload.FileUpload.Context;
const FileUploadHiddenInput = fileUpload.FileUpload.HiddenInput;

exports.FileUploadClearTrigger = FileUploadClearTrigger;
exports.FileUploadContext = FileUploadContext;
exports.FileUploadDropzone = FileUploadDropzone;
exports.FileUploadDropzoneContent = FileUploadDropzoneContent;
exports.FileUploadFileText = FileUploadFileText;
exports.FileUploadHiddenInput = FileUploadHiddenInput;
exports.FileUploadItem = FileUploadItem;
exports.FileUploadItemContent = FileUploadItemContent;
exports.FileUploadItemDeleteTrigger = FileUploadItemDeleteTrigger;
exports.FileUploadItemGroup = FileUploadItemGroup;
exports.FileUploadItemName = FileUploadItemName;
exports.FileUploadItemPreview = FileUploadItemPreview;
exports.FileUploadItemPreviewImage = FileUploadItemPreviewImage;
exports.FileUploadItemSizeText = FileUploadItemSizeText;
exports.FileUploadItems = FileUploadItems;
exports.FileUploadLabel = FileUploadLabel;
exports.FileUploadList = FileUploadList;
exports.FileUploadPropsProvider = FileUploadPropsProvider;
exports.FileUploadRoot = FileUploadRoot;
exports.FileUploadRootProvider = FileUploadRootProvider;
exports.FileUploadTrigger = FileUploadTrigger;
exports.useFileUploadStyles = useFileUploadStyles;
