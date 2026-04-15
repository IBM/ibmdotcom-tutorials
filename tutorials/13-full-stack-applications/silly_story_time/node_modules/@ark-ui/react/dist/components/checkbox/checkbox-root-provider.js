'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { CheckboxProvider } from './use-checkbox-context.js';

const CheckboxRootProvider = forwardRef((props, ref) => {
  const [{ value: checkbox }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(checkbox.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(CheckboxProvider, { value: checkbox, children: /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref }) });
});
CheckboxRootProvider.displayName = "CheckboxRootProvider";

export { CheckboxRootProvider };
