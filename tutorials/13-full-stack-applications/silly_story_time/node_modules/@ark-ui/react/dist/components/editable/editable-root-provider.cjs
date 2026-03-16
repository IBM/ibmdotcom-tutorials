'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useEditableContext = require('./use-editable-context.cjs');

const EditableRootProvider = react.forwardRef((props, ref) => {
  const [{ value: editable }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(editable.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useEditableContext.EditableProvider, { value: editable, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
EditableRootProvider.displayName = "EditableRootProvider";

exports.EditableRootProvider = EditableRootProvider;
