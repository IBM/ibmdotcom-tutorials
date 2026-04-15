'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useListboxContext = require('./use-listbox-context.cjs');

const ListboxInput = react.forwardRef((props, ref) => {
  const [inputProps, localProps] = createSplitProps.createSplitProps()(props, ["autoHighlight"]);
  const listbox = useListboxContext.useListboxContext();
  const mergedProps = react$1.mergeProps(listbox.getInputProps(inputProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { ...mergedProps, ref });
});
ListboxInput.displayName = "ListboxInput";

exports.ListboxInput = ListboxInput;
