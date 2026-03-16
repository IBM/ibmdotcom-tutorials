'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useListboxContext = require('./use-listbox-context.cjs');

const ListboxImpl = (props, ref) => {
  const [{ value: listbox }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(listbox.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useListboxContext.ListboxProvider, { value: listbox, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
};
const ListboxRootProvider = react.forwardRef(ListboxImpl);

exports.ListboxRootProvider = ListboxRootProvider;
