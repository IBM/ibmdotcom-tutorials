'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useField = require('./use-field.cjs');
const useFieldContext = require('./use-field-context.cjs');

const FieldRoot = react.forwardRef((props, ref) => {
  const [useFieldProps, localProps] = createSplitProps.createSplitProps()(props, [
    "id",
    "ids",
    "disabled",
    "invalid",
    "readOnly",
    "required"
  ]);
  const field = useField.useField(useFieldProps);
  const mergedProps = react$1.mergeProps(field.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useFieldContext.FieldProvider, { value: field, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(ref, field.refs.rootRef) }) });
});
FieldRoot.displayName = "FieldRoot";

exports.FieldRoot = FieldRoot;
