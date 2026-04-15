'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { FieldsetProvider } from './use-fieldset-context.js';

const FieldsetRootProvider = forwardRef((props, ref) => {
  const [{ value: fieldset }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(fieldset.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(FieldsetProvider, { value: fieldset, children: /* @__PURE__ */ jsx(ark.fieldset, { ...mergedProps, ref }) });
});
FieldsetRootProvider.displayName = "FieldsetRootProvider";

export { FieldsetRootProvider };
