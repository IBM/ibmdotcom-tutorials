'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { EditableProvider } from './use-editable-context.js';

const EditableRootProvider = forwardRef((props, ref) => {
  const [{ value: editable }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(editable.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(EditableProvider, { value: editable, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
EditableRootProvider.displayName = "EditableRootProvider";

export { EditableRootProvider };
