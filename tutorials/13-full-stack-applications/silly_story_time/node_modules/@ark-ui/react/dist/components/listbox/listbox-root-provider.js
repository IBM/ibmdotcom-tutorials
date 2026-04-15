'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { ListboxProvider } from './use-listbox-context.js';

const ListboxImpl = (props, ref) => {
  const [{ value: listbox }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(listbox.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ListboxProvider, { value: listbox, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
};
const ListboxRootProvider = forwardRef(ListboxImpl);

export { ListboxRootProvider };
