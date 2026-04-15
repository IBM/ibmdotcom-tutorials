'use strict';

var anatomy$1 = require('@zag-js/anatomy');
var domQuery = require('@zag-js/dom-query');
var fileUtils = require('@zag-js/file-utils');
var i18nUtils = require('@zag-js/i18n-utils');
var types = require('@zag-js/types');
var utils = require('@zag-js/utils');
var core = require('@zag-js/core');

// src/file-upload.anatomy.ts
var anatomy = anatomy$1.createAnatomy("file-upload").parts(
  "root",
  "dropzone",
  "item",
  "itemDeleteTrigger",
  "itemGroup",
  "itemName",
  "itemPreview",
  "itemPreviewImage",
  "itemSizeText",
  "label",
  "trigger",
  "clearTrigger"
);
var parts = anatomy.build();

// src/file-upload.dom.ts
var getRootId = (ctx) => ctx.ids?.root ?? `file:${ctx.id}`;
var getDropzoneId = (ctx) => ctx.ids?.dropzone ?? `file:${ctx.id}:dropzone`;
var getHiddenInputId = (ctx) => ctx.ids?.hiddenInput ?? `file:${ctx.id}:input`;
var getTriggerId = (ctx) => ctx.ids?.trigger ?? `file:${ctx.id}:trigger`;
var getLabelId = (ctx) => ctx.ids?.label ?? `file:${ctx.id}:label`;
var getItemId = (ctx, id) => ctx.ids?.item?.(id) ?? `file:${ctx.id}:item:${id}`;
var getItemNameId = (ctx, id) => ctx.ids?.itemName?.(id) ?? `file:${ctx.id}:item-name:${id}`;
var getItemSizeTextId = (ctx, id) => ctx.ids?.itemSizeText?.(id) ?? `file:${ctx.id}:item-size:${id}`;
var getItemPreviewId = (ctx, id) => ctx.ids?.itemPreview?.(id) ?? `file:${ctx.id}:item-preview:${id}`;
var getRootEl = (ctx) => ctx.getById(getRootId(ctx));
var getHiddenInputEl = (ctx) => ctx.getById(getHiddenInputId(ctx));
var getDropzoneEl = (ctx) => ctx.getById(getDropzoneId(ctx));
function isEventWithFiles(event) {
  const target = domQuery.getEventTarget(event);
  if (!event.dataTransfer) return !!target && "files" in target;
  return event.dataTransfer.types.some((type) => {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function isFilesWithinRange(ctx, incomingCount) {
  const { context, prop, computed } = ctx;
  if (!computed("multiple") && incomingCount > 1) return false;
  if (!computed("multiple") && incomingCount + context.get("acceptedFiles").length === 2) return true;
  if (incomingCount + context.get("acceptedFiles").length > prop("maxFiles")) return false;
  return true;
}
function getFilesFromEvent(ctx, files) {
  const { context, prop, computed } = ctx;
  const acceptedFiles = [];
  const rejectedFiles = [];
  files.forEach((file) => {
    const [accepted, acceptError] = fileUtils.isValidFileType(file, computed("acceptAttr"));
    const [sizeMatch, sizeError] = fileUtils.isValidFileSize(file, prop("minFileSize"), prop("maxFileSize"));
    const validateErrors = prop("validate")?.(file, {
      acceptedFiles: context.get("acceptedFiles"),
      rejectedFiles: context.get("rejectedFiles")
    });
    const valid = validateErrors ? validateErrors.length === 0 : true;
    if (accepted && sizeMatch && valid) {
      acceptedFiles.push(file);
    } else {
      const errors = [acceptError, sizeError];
      if (!valid) errors.push(...validateErrors ?? []);
      rejectedFiles.push({ file, errors: errors.filter(Boolean) });
    }
  });
  if (!isFilesWithinRange(ctx, acceptedFiles.length)) {
    acceptedFiles.forEach((file) => {
      rejectedFiles.push({ file, errors: ["TOO_MANY_FILES"] });
    });
    acceptedFiles.splice(0);
  }
  return {
    acceptedFiles,
    rejectedFiles
  };
}
function setInputFiles(inputEl, files) {
  const win = domQuery.getWindow(inputEl);
  try {
    if ("DataTransfer" in win) {
      const dataTransfer = new win.DataTransfer();
      files.forEach((file) => {
        dataTransfer.items.add(file);
      });
      inputEl.files = dataTransfer.files;
    }
  } catch {
  }
}

// src/file-upload.connect.ts
function connect(service, normalize) {
  const { state, send, prop, computed, scope, context } = service;
  const disabled = prop("disabled");
  const allowDrop = prop("allowDrop");
  const translations = prop("translations");
  const dragging = state.matches("dragging");
  const focused = state.matches("focused") && !disabled;
  return {
    dragging,
    focused,
    disabled: !!disabled,
    openFilePicker() {
      if (disabled) return;
      send({ type: "OPEN" });
    },
    deleteFile(file) {
      send({ type: "FILE.DELETE", file });
    },
    acceptedFiles: context.get("acceptedFiles"),
    rejectedFiles: context.get("rejectedFiles"),
    setFiles(files) {
      const count = files.length;
      send({ type: "FILES.SET", files, count });
    },
    clearRejectedFiles() {
      send({ type: "REJECTED_FILES.CLEAR" });
    },
    clearFiles() {
      send({ type: "FILES.CLEAR" });
    },
    getFileSize(file) {
      return i18nUtils.formatBytes(file.size, prop("locale"));
    },
    createFileUrl(file, cb) {
      const win = scope.getWin();
      const url = win.URL.createObjectURL(file);
      cb(url);
      return () => win.URL.revokeObjectURL(url);
    },
    setClipboardFiles(dt) {
      if (disabled) return false;
      const items = Array.from(dt?.items ?? []);
      const files = items.reduce((acc, item) => {
        if (item.kind !== "file") return acc;
        const file = item.getAsFile();
        if (!file) return acc;
        return [...acc, file];
      }, []);
      if (!files.length) return false;
      send({ type: "FILES.SET", files });
      return true;
    },
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        dir: prop("dir"),
        id: getRootId(scope),
        "data-disabled": domQuery.dataAttr(disabled),
        "data-dragging": domQuery.dataAttr(dragging)
      });
    },
    getDropzoneProps(props2 = {}) {
      return normalize.element({
        ...parts.dropzone.attrs,
        dir: prop("dir"),
        id: getDropzoneId(scope),
        tabIndex: disabled || props2.disableClick ? void 0 : 0,
        role: props2.disableClick ? "application" : "button",
        "aria-label": translations.dropzone,
        "aria-disabled": disabled,
        "data-invalid": domQuery.dataAttr(prop("invalid")),
        "data-disabled": domQuery.dataAttr(disabled),
        "data-dragging": domQuery.dataAttr(dragging),
        onKeyDown(event) {
          if (disabled) return;
          if (event.defaultPrevented) return;
          if (!domQuery.isSelfTarget(event)) return;
          if (props2.disableClick) return;
          if (event.key !== "Enter" && event.key !== " ") return;
          send({ type: "DROPZONE.CLICK", src: "keydown" });
        },
        onClick(event) {
          if (disabled) return;
          if (event.defaultPrevented) return;
          if (props2.disableClick) return;
          if (!domQuery.isSelfTarget(event)) return;
          if (event.currentTarget.localName === "label") {
            event.preventDefault();
          }
          send({ type: "DROPZONE.CLICK" });
        },
        onDragOver(event) {
          if (disabled) return;
          if (!allowDrop) return;
          event.preventDefault();
          event.stopPropagation();
          try {
            event.dataTransfer.dropEffect = "copy";
          } catch {
          }
          const hasFiles = isEventWithFiles(event);
          if (!hasFiles) return;
          const count = event.dataTransfer.items.length;
          send({ type: "DROPZONE.DRAG_OVER", count });
        },
        onDragLeave(event) {
          if (disabled) return;
          if (!allowDrop) return;
          if (domQuery.contains(event.currentTarget, event.relatedTarget)) return;
          send({ type: "DROPZONE.DRAG_LEAVE" });
        },
        onDrop(event) {
          if (disabled) return;
          if (allowDrop) {
            event.preventDefault();
            event.stopPropagation();
          }
          const hasFiles = isEventWithFiles(event);
          if (disabled || !hasFiles) return;
          fileUtils.getFileEntries(event.dataTransfer.items, prop("directory")).then((files) => {
            send({ type: "DROPZONE.DROP", files: utils.flatArray(files) });
          });
        },
        onFocus() {
          if (disabled) return;
          send({ type: "DROPZONE.FOCUS" });
        },
        onBlur() {
          if (disabled) return;
          send({ type: "DROPZONE.BLUR" });
        }
      });
    },
    getTriggerProps() {
      return normalize.button({
        ...parts.trigger.attrs,
        dir: prop("dir"),
        id: getTriggerId(scope),
        disabled,
        "data-disabled": domQuery.dataAttr(disabled),
        "data-invalid": domQuery.dataAttr(prop("invalid")),
        type: "button",
        onClick(event) {
          if (disabled) return;
          if (domQuery.contains(getDropzoneEl(scope), event.currentTarget)) {
            event.stopPropagation();
          }
          send({ type: "OPEN" });
        }
      });
    },
    getHiddenInputProps() {
      return normalize.input({
        id: getHiddenInputId(scope),
        tabIndex: -1,
        disabled,
        type: "file",
        required: prop("required"),
        capture: prop("capture"),
        name: prop("name"),
        accept: computed("acceptAttr"),
        webkitdirectory: prop("directory") ? "" : void 0,
        multiple: computed("multiple") || prop("maxFiles") > 1,
        onClick(event) {
          event.stopPropagation();
          event.currentTarget.value = "";
        },
        onInput(event) {
          if (disabled) return;
          const { files } = event.currentTarget;
          send({ type: "FILES.SET", files: files ? Array.from(files) : [] });
        },
        style: domQuery.visuallyHiddenStyle
      });
    },
    getItemGroupProps() {
      return normalize.element({
        ...parts.itemGroup.attrs,
        dir: prop("dir"),
        "data-disabled": domQuery.dataAttr(disabled)
      });
    },
    getItemProps(props2) {
      const { file } = props2;
      return normalize.element({
        ...parts.item.attrs,
        dir: prop("dir"),
        id: getItemId(scope, file.name),
        "data-disabled": domQuery.dataAttr(disabled)
      });
    },
    getItemNameProps(props2) {
      const { file } = props2;
      return normalize.element({
        ...parts.itemName.attrs,
        dir: prop("dir"),
        id: getItemNameId(scope, file.name),
        "data-disabled": domQuery.dataAttr(disabled)
      });
    },
    getItemSizeTextProps(props2) {
      const { file } = props2;
      return normalize.element({
        ...parts.itemSizeText.attrs,
        dir: prop("dir"),
        id: getItemSizeTextId(scope, file.name),
        "data-disabled": domQuery.dataAttr(disabled)
      });
    },
    getItemPreviewProps(props2) {
      const { file } = props2;
      return normalize.element({
        ...parts.itemPreview.attrs,
        dir: prop("dir"),
        id: getItemPreviewId(scope, file.name),
        "data-disabled": domQuery.dataAttr(disabled)
      });
    },
    getItemPreviewImageProps(props2) {
      const { file, url } = props2;
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        throw new Error("Preview Image is only supported for image files");
      }
      return normalize.img({
        ...parts.itemPreviewImage.attrs,
        alt: translations.itemPreview?.(file),
        src: url,
        "data-disabled": domQuery.dataAttr(disabled)
      });
    },
    getItemDeleteTriggerProps(props2) {
      const { file } = props2;
      return normalize.button({
        ...parts.itemDeleteTrigger.attrs,
        dir: prop("dir"),
        type: "button",
        disabled,
        "data-disabled": domQuery.dataAttr(disabled),
        "aria-label": translations.deleteFile?.(file),
        onClick() {
          if (disabled) return;
          send({ type: "FILE.DELETE", file });
        }
      });
    },
    getLabelProps() {
      return normalize.label({
        ...parts.label.attrs,
        dir: prop("dir"),
        id: getLabelId(scope),
        htmlFor: getHiddenInputId(scope),
        "data-disabled": domQuery.dataAttr(disabled)
      });
    },
    getClearTriggerProps() {
      return normalize.button({
        ...parts.clearTrigger.attrs,
        dir: prop("dir"),
        type: "button",
        disabled,
        hidden: context.get("acceptedFiles").length === 0,
        "data-disabled": domQuery.dataAttr(disabled),
        onClick(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          send({ type: "FILES.CLEAR" });
        }
      });
    }
  };
}
var machine = core.createMachine({
  props({ props: props2 }) {
    return {
      minFileSize: 0,
      maxFileSize: Number.POSITIVE_INFINITY,
      maxFiles: 1,
      allowDrop: true,
      preventDocumentDrop: true,
      ...props2,
      translations: {
        dropzone: "dropzone",
        itemPreview: (file) => `preview of ${file.name}`,
        deleteFile: (file) => `delete file ${file.name}`,
        ...props2.translations
      }
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable, getContext }) {
    return {
      acceptedFiles: bindable(() => ({
        defaultValue: [],
        isEqual: (a, b) => a.length === b?.length && a.every((file, i) => fileUtils.isFileEqual(file, b[i])),
        hash(value) {
          return value.map((file) => `${file.name}-${file.size}`).join(",");
        },
        onChange(value) {
          const ctx = getContext();
          prop("onFileAccept")?.({ files: value });
          prop("onFileChange")?.({ acceptedFiles: value, rejectedFiles: ctx.get("rejectedFiles") });
        }
      })),
      rejectedFiles: bindable(() => ({
        defaultValue: [],
        isEqual: (a, b) => a.length === b?.length && a.every((file, i) => fileUtils.isFileEqual(file.file, b[i].file)),
        onChange(value) {
          const ctx = getContext();
          prop("onFileReject")?.({ files: value });
          prop("onFileChange")?.({ acceptedFiles: ctx.get("acceptedFiles"), rejectedFiles: value });
        }
      }))
    };
  },
  computed: {
    acceptAttr: ({ prop }) => fileUtils.getAcceptAttrString(prop("accept")),
    multiple: ({ prop }) => prop("maxFiles") > 1
  },
  watch({ track, context, action }) {
    track([() => context.hash("acceptedFiles")], () => {
      action(["syncInputElement"]);
    });
  },
  on: {
    "FILES.SET": {
      actions: ["setFilesFromEvent"]
    },
    "FILE.DELETE": {
      actions: ["removeFile"]
    },
    "FILES.CLEAR": {
      actions: ["clearFiles"]
    },
    "REJECTED_FILES.CLEAR": {
      actions: ["clearRejectedFiles"]
    }
  },
  effects: ["preventDocumentDrop"],
  states: {
    idle: {
      on: {
        OPEN: {
          actions: ["openFilePicker"]
        },
        "DROPZONE.CLICK": {
          actions: ["openFilePicker"]
        },
        "DROPZONE.FOCUS": {
          target: "focused"
        },
        "DROPZONE.DRAG_OVER": {
          target: "dragging"
        }
      }
    },
    focused: {
      on: {
        "DROPZONE.BLUR": {
          target: "idle"
        },
        OPEN: {
          actions: ["openFilePicker"]
        },
        "DROPZONE.CLICK": {
          actions: ["openFilePicker"]
        },
        "DROPZONE.DRAG_OVER": {
          target: "dragging"
        }
      }
    },
    dragging: {
      on: {
        "DROPZONE.DROP": {
          target: "idle",
          actions: ["setFilesFromEvent"]
        },
        "DROPZONE.DRAG_LEAVE": {
          target: "idle"
        }
      }
    }
  },
  implementations: {
    effects: {
      preventDocumentDrop({ prop, scope }) {
        if (!prop("preventDocumentDrop")) return;
        if (!prop("allowDrop")) return;
        if (prop("disabled")) return;
        const doc = scope.getDoc();
        const onDragOver = (event) => {
          event?.preventDefault();
        };
        const onDrop = (event) => {
          if (domQuery.contains(getRootEl(scope), domQuery.getEventTarget(event))) return;
          event.preventDefault();
        };
        return utils.callAll(domQuery.addDomEvent(doc, "dragover", onDragOver, false), domQuery.addDomEvent(doc, "drop", onDrop, false));
      }
    },
    actions: {
      syncInputElement({ scope, context }) {
        queueMicrotask(() => {
          const inputEl = getHiddenInputEl(scope);
          if (!inputEl) return;
          setInputFiles(inputEl, context.get("acceptedFiles"));
          const win = scope.getWin();
          inputEl.dispatchEvent(new win.Event("change", { bubbles: true }));
        });
      },
      openFilePicker({ scope }) {
        domQuery.raf(() => {
          getHiddenInputEl(scope)?.click();
        });
      },
      setFilesFromEvent(params) {
        const { computed, context, event } = params;
        const result = getFilesFromEvent(params, event.files);
        const { acceptedFiles, rejectedFiles } = result;
        if (computed("multiple")) {
          context.set("acceptedFiles", (prev) => [...prev, ...acceptedFiles]);
          context.set("rejectedFiles", rejectedFiles);
          return;
        }
        if (acceptedFiles.length) {
          const files = [acceptedFiles[0]];
          context.set("acceptedFiles", files);
          context.set("rejectedFiles", rejectedFiles);
        } else if (rejectedFiles.length) {
          context.set("acceptedFiles", context.get("acceptedFiles"));
          context.set("rejectedFiles", rejectedFiles);
        }
      },
      removeFile({ context, event }) {
        const files = context.get("acceptedFiles").filter((file) => file !== event.file);
        const rejectedFiles = context.get("rejectedFiles").filter((item) => item.file !== event.file);
        context.set("acceptedFiles", files);
        context.set("rejectedFiles", rejectedFiles);
      },
      clearRejectedFiles({ context }) {
        context.set("acceptedFiles", context.get("acceptedFiles"));
        context.set("rejectedFiles", []);
      },
      clearFiles({ context }) {
        context.set("acceptedFiles", []);
        context.set("rejectedFiles", []);
      }
    }
  }
});
var props = types.createProps()([
  "accept",
  "allowDrop",
  "capture",
  "dir",
  "directory",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "locale",
  "maxFiles",
  "maxFileSize",
  "minFileSize",
  "name",
  "invalid",
  "onFileAccept",
  "onFileReject",
  "onFileChange",
  "preventDocumentDrop",
  "required",
  "translations",
  "validate"
]);
var splitProps = utils.createSplitProps(props);
var itemProps = types.createProps()(["file"]);
var splitItemProps = utils.createSplitProps(itemProps);

exports.anatomy = anatomy;
exports.connect = connect;
exports.itemProps = itemProps;
exports.machine = machine;
exports.props = props;
exports.splitItemProps = splitItemProps;
exports.splitProps = splitProps;
