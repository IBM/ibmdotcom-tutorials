'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('./use-field-context.cjs');

const FieldErrorText = react.forwardRef((props, ref) => {
  const field = useFieldContext.useFieldContext();
  const mergedProps = react$1.mergeProps(field.getErrorTextProps(), props);
  if (field?.invalid) {
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
  }
  return null;
});
FieldErrorText.displayName = "FieldErrorText";

exports.FieldErrorText = FieldErrorText;
