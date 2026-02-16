'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useEditableContext = require('./use-editable-context.cjs');

const EditablePreview = react.forwardRef((props, ref) => {
  const editable = useEditableContext.useEditableContext();
  const mergedProps = react$1.mergeProps(editable.getPreviewProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
EditablePreview.displayName = "EditablePreview";

exports.EditablePreview = EditablePreview;
