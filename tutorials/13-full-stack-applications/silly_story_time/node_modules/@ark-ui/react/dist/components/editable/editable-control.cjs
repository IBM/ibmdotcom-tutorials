'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useEditableContext = require('./use-editable-context.cjs');

const EditableControl = react.forwardRef((props, ref) => {
  const editable = useEditableContext.useEditableContext();
  const mergedProps = react$1.mergeProps(editable.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
EditableControl.displayName = "EditableControl";

exports.EditableControl = EditableControl;
