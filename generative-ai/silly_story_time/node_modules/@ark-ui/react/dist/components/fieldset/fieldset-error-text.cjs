'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldsetContext = require('./use-fieldset-context.cjs');

const FieldsetErrorText = react.forwardRef((props, ref) => {
  const fieldset = useFieldsetContext.useFieldsetContext();
  const mergedProps = react$1.mergeProps(fieldset.getErrorTextProps(), props);
  return fieldset.invalid ? /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref }) : null;
});
FieldsetErrorText.displayName = "FieldsetErrorText";

exports.FieldsetErrorText = FieldsetErrorText;
