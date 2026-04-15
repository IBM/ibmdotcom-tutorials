'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldsetContext = require('./use-fieldset-context.cjs');

const FieldsetHelperText = react.forwardRef((props, ref) => {
  const fieldset = useFieldsetContext.useFieldsetContext();
  const mergedProps = react$1.mergeProps(fieldset.getHelperTextProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
FieldsetHelperText.displayName = "FieldsetHelperText";

exports.FieldsetHelperText = FieldsetHelperText;
