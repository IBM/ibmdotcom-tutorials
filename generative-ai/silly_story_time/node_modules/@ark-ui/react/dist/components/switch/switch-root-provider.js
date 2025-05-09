'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { SwitchProvider } from './use-switch-context.js';

const SwitchRootProvider = forwardRef((props, ref) => {
  const [{ value: api }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(api.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(SwitchProvider, { value: api, children: /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref }) });
});
SwitchRootProvider.displayName = "SwitchRootProvider";

export { SwitchRootProvider };
