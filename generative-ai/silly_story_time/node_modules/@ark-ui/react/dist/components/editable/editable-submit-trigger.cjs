'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useEditableContext = require('./use-editable-context.cjs');

const EditableSubmitTrigger = react.forwardRef((props, ref) => {
  const editable = useEditableContext.useEditableContext();
  const mergedProps = react$1.mergeProps(editable.getSubmitTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
EditableSubmitTrigger.displayName = "EditableSubmitTrigger";

exports.EditableSubmitTrigger = EditableSubmitTrigger;
