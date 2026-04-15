'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFieldContext = require('./use-field-context.cjs');

const FieldRootProvider = react.forwardRef((props, ref) => {
  const [{ value: field }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(field.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useFieldContext.FieldProvider, { value: field, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
FieldRootProvider.displayName = "FieldRootProvider";

exports.FieldRootProvider = FieldRootProvider;
