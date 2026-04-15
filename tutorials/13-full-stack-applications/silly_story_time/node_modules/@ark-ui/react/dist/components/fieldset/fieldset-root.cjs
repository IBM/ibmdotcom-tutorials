'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useFieldset = require('./use-fieldset.cjs');
const useFieldsetContext = require('./use-fieldset-context.cjs');

const FieldsetRoot = react.forwardRef((props, ref) => {
  const [useFieldsetProps, localProps] = createSplitProps.createSplitProps()(props, ["id", "disabled", "invalid"]);
  const fieldset = useFieldset.useFieldset(useFieldsetProps);
  const mergedProps = react$1.mergeProps(fieldset.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useFieldsetContext.FieldsetProvider, { value: fieldset, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.fieldset, { ...mergedProps, ref: composeRefs.composeRefs(ref, fieldset.refs.rootRef) }) });
});
FieldsetRoot.displayName = "FieldsetRoot";

exports.FieldsetRoot = FieldsetRoot;
