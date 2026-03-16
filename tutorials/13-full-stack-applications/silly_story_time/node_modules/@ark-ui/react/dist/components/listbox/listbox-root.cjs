'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useListbox = require('./use-listbox.cjs');
const useListboxContext = require('./use-listbox-context.cjs');

const ListboxImpl = (props, ref) => {
  const [useListboxProps, localProps] = createSplitProps.createSplitProps()(props, [
    "collection",
    "defaultHighlightedValue",
    "defaultValue",
    "deselectable",
    "disabled",
    "disallowSelectAll",
    "highlightedValue",
    "id",
    "ids",
    "loopFocus",
    "onHighlightChange",
    "onSelect",
    "onValueChange",
    "orientation",
    "scrollToIndexFn",
    "selectionMode",
    "selectOnHighlight",
    "typeahead",
    "value"
  ]);
  const listbox = useListbox.useListbox(useListboxProps);
  const mergedProps = react$1.mergeProps(listbox.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useListboxContext.ListboxProvider, { value: listbox, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
};
const ListboxRoot = react.forwardRef(ListboxImpl);

exports.ListboxRoot = ListboxRoot;
