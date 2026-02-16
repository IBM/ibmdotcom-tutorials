'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFieldsetContext = require('./use-fieldset-context.cjs');

const FieldsetRootProvider = react.forwardRef((props, ref) => {
  const [{ value: fieldset }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(fieldset.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useFieldsetContext.FieldsetProvider, { value: fieldset, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.fieldset, { ...mergedProps, ref }) });
});
FieldsetRootProvider.displayName = "FieldsetRootProvider";

exports.FieldsetRootProvider = FieldsetRootProvider;
