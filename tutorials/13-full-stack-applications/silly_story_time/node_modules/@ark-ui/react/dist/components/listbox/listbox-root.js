'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useListbox } from './use-listbox.js';
import { ListboxProvider } from './use-listbox-context.js';

const ListboxImpl = (props, ref) => {
  const [useListboxProps, localProps] = createSplitProps()(props, [
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
  const listbox = useListbox(useListboxProps);
  const mergedProps = mergeProps(listbox.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ListboxProvider, { value: listbox, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
};
const ListboxRoot = forwardRef(ListboxImpl);

export { ListboxRoot };
