"use strict";
"use client";
import { jsx, jsxs } from 'react/jsx-runtime';
import { FileUpload, useFileUploadContext } from '@ark-ui/react/file-upload';
import { forwardRef, useMemo } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { CloseIcon, FileIcon } from '../icons.js';
import { Span } from '../box/span.js';
import { For } from '../for/for.js';

const {
  withProvider,
  withContext,
  useStyles: useFileUploadStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "fileUpload" });
const FileUploadRootProvider = withProvider(FileUpload.RootProvider, "root", { forwardAsChild: true });
const FileUploadRoot = withProvider(
  FileUpload.Root,
  "root",
  { forwardAsChild: true }
);
const FileUploadPropsProvider = PropsProvider;
const FileUploadClearTrigger = withContext(FileUpload.ClearTrigger, "clearTrigger", { forwardAsChild: true });
const FileUploadDropzone = withContext(FileUpload.Dropzone, "dropzone", { forwardAsChild: true });
const FileUploadDropzoneContent = withContext("div", "dropzoneContent");
const FileUploadItem = withContext(
  FileUpload.Item,
  "item",
  { forwardAsChild: true }
);
const FileUploadItemContent = withContext("div", "itemContent");
const FileUploadItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsx(CloseIcon, {})
  }
});
const FileUploadItemGroup = withContext(FileUpload.ItemGroup, "itemGroup", { forwardAsChild: true });
const FileUploadItemName = withContext(FileUpload.ItemName, "itemName", { forwardAsChild: true });
const FileUploadItemPreview = withContext(FileUpload.ItemPreview, "itemPreview", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsx(FileIcon, {})
  }
});
const FileUploadItemPreviewImage = withContext(FileUpload.ItemPreviewImage, "itemPreviewImage", { forwardAsChild: true });
const FileUploadItemSizeText = withContext(FileUpload.ItemSizeText, "itemSizeText", { forwardAsChild: true });
const FileUploadLabel = withContext(FileUpload.Label, "label", { forwardAsChild: true });
const FileUploadTrigger = withContext(FileUpload.Trigger, "trigger", { forwardAsChild: true });
const FileUploadItems = (props) => {
  const { showSize, clearable, files, ...rest } = props;
  const fileUpload = useFileUploadContext();
  const acceptedFiles = files ?? fileUpload.acceptedFiles;
  return /* @__PURE__ */ jsx(For, { each: acceptedFiles, children: (file) => /* @__PURE__ */ jsxs(FileUploadItem, { file, ...rest, children: [
    /* @__PURE__ */ jsx(FileUploadItemPreview, {}),
    showSize ? /* @__PURE__ */ jsxs(FileUploadItemContent, { children: [
      /* @__PURE__ */ jsx(FileUploadItemName, {}),
      /* @__PURE__ */ jsx(FileUploadItemSizeText, {})
    ] }) : /* @__PURE__ */ jsx(FileUploadItemName, { flex: "1" }),
    clearable && /* @__PURE__ */ jsx(FileUploadItemDeleteTrigger, {})
  ] }, file.name) });
};
const FileUploadList = forwardRef(
  function FileUploadList2(props, ref) {
    const { showSize, clearable, files, ...rest } = props;
    return /* @__PURE__ */ jsx(FileUploadItemGroup, { ref, ...rest, children: /* @__PURE__ */ jsx(
      FileUploadItems,
      {
        showSize,
        clearable,
        files
      }
    ) });
  }
);
const FileUploadFileText = forwardRef(function FileUploadFileText2(props, ref) {
  const { fallback = "Select file(s)", ...rest } = props;
  const fileUpload = useFileUploadContext();
  const styles = useFileUploadStyles();
  const acceptedFiles = fileUpload.acceptedFiles;
  const fileText = useMemo(() => {
    if (acceptedFiles.length === 1) {
      return acceptedFiles[0].name;
    }
    if (acceptedFiles.length > 1) {
      return `${acceptedFiles.length} files`;
    }
    return fallback;
  }, [acceptedFiles, fallback]);
  return /* @__PURE__ */ jsx(
    Span,
    {
      ref,
      "data-placeholder": fileText === fallback ? "" : void 0,
      ...rest,
      css: [styles.fileText, props.css],
      children: fileText
    }
  );
});
const FileUploadContext = FileUpload.Context;
const FileUploadHiddenInput = FileUpload.HiddenInput;

export { FileUploadClearTrigger, FileUploadContext, FileUploadDropzone, FileUploadDropzoneContent, FileUploadFileText, FileUploadHiddenInput, FileUploadItem, FileUploadItemContent, FileUploadItemDeleteTrigger, FileUploadItemGroup, FileUploadItemName, FileUploadItemPreview, FileUploadItemPreviewImage, FileUploadItemSizeText, FileUploadItems, FileUploadLabel, FileUploadList, FileUploadPropsProvider, FileUploadRoot, FileUploadRootProvider, FileUploadTrigger, useFileUploadStyles };
